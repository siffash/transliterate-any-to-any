const UNITS = new Set("市省");

export const stripZhUnit = (word: string) => {
  const chars = [...word];
  return chars.length >= 3 && UNITS.has(chars[chars.length - 1]!)
    ? chars.slice(0, -1).join("")
    : word;
};

const stripSegments = (segment: (text: string) => { segment: string }[], run: string) => {
  const chars = [...run];
  let index = 0;
  const stripped = segment(run)
    .map(({ segment }) => {
      const original = chars.slice(index, (index += [...segment].length)).join("");
      return stripZhUnit(segment) === segment ? original : [...original].slice(0, -1).join("");
    })
    .join("");
  return index === chars.length ? stripped : run;
};

export const stripZhUnits = async (text: string) => {
  const runs = text.split(/(\p{Script=Han}+)/u);
  try {
    const { loadChineseSegmenter } = await import("helpers/segmentChinese");
    const segment = await loadChineseSegmenter();
    return runs.map((run, i) => (i % 2 ? stripSegments(segment, run) : run)).join("");
  } catch {
    return runs.map((run, i) => (i % 2 ? stripZhUnit(run) : run)).join("");
  }
};
