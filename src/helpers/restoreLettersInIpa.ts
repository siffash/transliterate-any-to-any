export interface RestoreIpaRule {
  ipaCharToBeReplaced: string | string[];
  lettersToRestore: Record<string, string>;
}

const STRESS_MARKS = new Set(["ˈ", "ˌ"]);

const MAX_SEARCH_WINDOW = 3;

interface Span {
  start: number; // inclusive
  end: number; // exclusive
}

function findOccurrences(haystack: string, needle: string): Span[] {
  if (!needle) return [];
  const spans: Span[] = [];
  let from = 0;
  while (from <= haystack.length - needle.length) {
    const idx = haystack.indexOf(needle, from);
    if (idx === -1) break;
    spans.push({ start: idx, end: idx + needle.length });
    from = idx + needle.length;
  }
  return spans;
}

function stripStressMarks(ipa: string): { clean: string; toOriginalIndex: number[] } {
  let clean = "";
  const toOriginalIndex: number[] = [];
  for (let i = 0; i < ipa.length; i++) {
    const ch = ipa[i];
    if (STRESS_MARKS.has(ch)) continue;
    clean += ch;
    toOriginalIndex.push(i);
  }
  return { clean, toOriginalIndex };
}

function findCandidates(haystack: string, needles: string[]): Span[] {
  const all: Span[] = [];
  for (const needle of needles) {
    all.push(...findOccurrences(haystack, needle));
  }
  all.sort((a, b) => a.start - b.start);
  return all;
}

function isConsumed(span: Span, consumed: boolean[]): boolean {
  for (let i = span.start; i < span.end; i++) {
    if (consumed[i]) return true;
  }
  return false;
}

function markConsumed(span: Span, consumed: boolean[]): void {
  for (let i = span.start; i < span.end; i++) {
    consumed[i] = true;
  }
}

function projectIndex(index: number, fromLength: number, toLength: number): number {
  if (fromLength === 0) return 0;
  return Math.round((index * toLength) / fromLength);
}

function searchWindowFor(needles: string[]): number {
  const widestNeedle = Math.max(1, ...needles.map(n => n.length));
  return Math.min(MAX_SEARCH_WINDOW, widestNeedle);
}

function shiftsFor(window: number): number[] {
  const shifts = [0];
  for (let d = 1; d <= window; d++) {
    shifts.push(-d, d);
  }
  return shifts;
}

interface RestoreTask {
  needles: string[];
  originalLetters: string;
  replacement: string;
}

function flattenRules(rules: RestoreIpaRule[]): RestoreTask[] {
  const tasks: RestoreTask[] = [];
  for (const rule of rules) {
    const needles = Array.isArray(rule.ipaCharToBeReplaced)
      ? rule.ipaCharToBeReplaced
      : [rule.ipaCharToBeReplaced];
    for (const [originalLetters, replacement] of Object.entries(rule.lettersToRestore)) {
      tasks.push({ needles, originalLetters, replacement });
    }
  }
  return tasks;
}

interface PlannedReplacement {
  start: number; // index into the ORIGINAL ipa string
  end: number;
  value: string;
}

export const restoreLettersInIpa = (
  originalWord: string,
  ipa: string,
  rules: RestoreIpaRule | RestoreIpaRule[],
): string => {
  originalWord = originalWord.toLowerCase();
  const ruleList = Array.isArray(rules) ? rules : [rules];
  const tasks = flattenRules(ruleList);
  const { clean: cleanIpa, toOriginalIndex } = stripStressMarks(ipa);

  const consumedWordIndices = new Array(originalWord.length).fill(false);
  const consumedIpaIndices = new Array(cleanIpa.length).fill(false);
  const replacements: PlannedReplacement[] = [];

  // Longer spellings first (globally, across every rule and every key),
  // so e.g. "eille" claims its territory before "eil" can match inside it
  const orderedTasks = [...tasks].sort(
    (a, b) => b.originalLetters.length - a.originalLetters.length,
  );

  for (const task of orderedTasks) {
    const candidates = findCandidates(cleanIpa, task.needles);
    const shifts = shiftsFor(searchWindowFor(task.needles));

    for (const candidate of candidates) {
      if (isConsumed(candidate, consumedIpaIndices)) continue; // claimed by an earlier task

      const anchor = projectIndex(candidate.start, cleanIpa.length, originalWord.length);

      let matchedWordSpan: Span | null = null;
      for (const shift of shifts) {
        const start = anchor + shift;
        if (start < 0) continue;
        const end = start + task.originalLetters.length;
        if (end > originalWord.length) continue;
        const wordSpan: Span = { start, end };
        if (isConsumed(wordSpan, consumedWordIndices)) continue;
        if (originalWord.slice(start, end) === task.originalLetters) {
          matchedWordSpan = wordSpan;
          break; // closest valid match wins; stop searching further out
        }
      }

      // No plausible match near this candidate for this key - leave the IPA
      // exactly as it is here rather than forcing the nearest guess
      if (!matchedWordSpan) continue;

      markConsumed(matchedWordSpan, consumedWordIndices);
      markConsumed(candidate, consumedIpaIndices);
      replacements.push({
        start: toOriginalIndex[candidate.start],
        end: toOriginalIndex[candidate.end - 1] + 1,
        value: task.replacement,
      });
    }
  }

  // Splice right-to-left so earlier replacements don't shift later indices
  replacements.sort((a, b) => b.start - a.start);
  let result = ipa;
  for (const r of replacements) {
    result = result.slice(0, r.start) + r.value + result.slice(r.end);
  }
  return result;
};
