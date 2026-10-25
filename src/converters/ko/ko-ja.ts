import { Text } from "types";

interface HangulSyllable {
  initial: string;
  vowel: string;
  batchim: string;
  isHangul: true;
  isAspirated: boolean;
}

interface NonHangulSyllable {
  isHangul: false;
  raw: string;
}

type Syllable = HangulSyllable | NonHangulSyllable;

export const koJa = async (text: Text) => {
  const {
    BATCHIMS,
    CODAS,
    GLIDE_KANA,
    INITIALS,
    KANA_ROWS,
    LIAISON,
    VOWEL_TO_IDX,
    VOWELS,
    W_KANA,
  } = await import("data/ko/ko-ja.map");
  const { RBT } = await import("helpers/rbt");
  const { normalizeKo } = await import("helpers/normalizeKo");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  // Converts standalone letters (ㅋㅋㅋ, ㅠㅠ), spelled in IPA; compiled only when the text has any
  let letters: ReturnType<typeof RBT.fromRules> | undefined;

  const convertSyllables = (text: string) => {
    const syllables: Syllable[] = [];

    for (let i = 0; i < text.length; i++) {
      const code = text[i].charCodeAt(0);
      if (code < 0xac00 || code > 0xd7a3) {
        syllables.push({ isHangul: false, raw: text[i] });
        continue;
      }
      const sIdx = code - 0xac00;
      syllables.push({
        initial: INITIALS[Math.floor(sIdx / 588)],
        vowel: VOWELS[Math.floor((sIdx % 588) / 28)],
        batchim: BATCHIMS[sIdx % 28],
        isHangul: true,
        isAspirated: false, // NEW FLAG
      });
    }

    // REFINED PHONETIC RULES
    for (let i = 1; i < syllables.length; i++) {
      const curr = syllables[i];
      const prev = syllables[i - 1];
      if (!curr.isHangul || !prev.isHangul) continue;

      if (curr.initial === "ㅇ" && prev.batchim !== "") {
        [prev.batchim, curr.initial] = LIAISON[prev.batchim] ?? ["", prev.batchim];
      } else if (curr.initial === "ㅎ" && ["ㄱ", "ㄷ", "ㅂ", "ㅈ"].includes(prev.batchim)) {
        const aspMap: Record<string, string> = { ㄱ: "ㅋ", ㄷ: "ㅌ", ㅂ: "ㅍ", ㅈ: "ㅊ" };
        curr.initial = aspMap[prev.batchim];
        curr.isAspirated = true; // Mark to prevent accidental voicing
        prev.batchim = "";
      } else if (curr.initial === "ㅎ" && ["ㄴ", "ㄹ", "ㅁ"].includes(prev.batchim)) {
        curr.initial = prev.batchim;
        prev.batchim = "";
      }
    }

    let result = "";
    let isStartOfWord = true;

    for (let i = 0; i < syllables.length; i++) {
      const s = syllables[i];
      if (!s.isHangul) {
        result += s.raw;
        if (/\s/.test(s.raw)) isStartOfWord = true;
        continue;
      }

      const normInit = ["ㄲ", "ㅋ"].includes(s.initial)
        ? "ㄱ"
        : ["ㄸ", "ㅌ"].includes(s.initial)
          ? "ㄷ"
          : ["ㅃ", "ㅍ"].includes(s.initial)
            ? "ㅂ"
            : ["ㅉ", "ㅊ"].includes(s.initial)
              ? "ㅈ"
              : ["ㅆ"].includes(s.initial)
                ? "ㅅ"
                : s.initial;

      const prevS = syllables[i - 1];
      const isSoftPrev =
        !prevS ||
        !prevS.isHangul ||
        prevS.batchim === "" ||
        ["ㄴ", "ㄹ", "ㅁ", "ㅇ"].includes(prevS.batchim);

      // CRITICAL FIX: Only voice if it wasn't created by Aspiration
      const shouldVoice =
        !isStartOfWord &&
        isSoftPrev &&
        ["ㄱ", "ㄷ", "ㅂ", "ㅈ"].includes(s.initial) &&
        !s.isAspirated;
      const rowKey = shouldVoice ? `v_${normInit}` : normInit;

      let kana = KANA_ROWS[rowKey][VOWEL_TO_IDX[s.vowel]];

      // Y-Vowel handling
      if (["ㅑ", "ㅕ", "ㅛ", "ㅠ"].includes(s.vowel) && normInit !== "ㅇ") {
        const yMod = s.vowel === "ㅑ" ? "ャ" : s.vowel === "ㅠ" ? "ュ" : "ョ";
        kana = KANA_ROWS[rowKey][normInit === "ㄷ" ? 3 : 1] + yMod;
      }

      if (normInit === "ㅇ") kana = GLIDE_KANA[s.vowel] ?? kana;
      else if ((normInit === "ㄱ" || normInit === "ㅎ") && W_KANA[s.vowel]) {
        kana = KANA_ROWS[rowKey][2] + W_KANA[s.vowel];
      }

      result += kana;

      const coda = CODAS[s.batchim] ?? s.batchim;
      if (coda === "ㄱ") result += "ク";
      else if (coda === "ㄴ" || coda === "ㅇ") result += "ン";
      else if (coda === "ㄹ") result += "ル";
      else if (coda === "ㅁ") result += "ム";
      else if (coda === "ㅂ" || coda === "ㅍ") result += "プ";
      else if (coda !== "") result += "ッ";

      isStartOfWord = false;
    }

    return result;
  };

  const convert = (text: string) =>
    normalizeKo(text, convertSyllables, "ipa", text =>
      (letters ??= RBT.fromRules(ipaJaRules)).transliterate(text),
    );

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
