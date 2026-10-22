// Helpers for choosing between two readings of a Thai word: the IPA of th-ipa.rules (which keeps
// vowel length) and the RTGS romanization of @pcampus/thai-romanization

// The RTGS spelling of an IPA reading, without length, tones or syllable breaks
export const ipaToRtgs = (ipa: string): string =>
  ipa
    .normalize("NFD")
    .replace(/[˥˦˧˨˩ːˑʔ]|\p{M}/gu, "")
    .replace(/([pkt])ʰ(?![aeiouɛɤɯɔrlw])/g, "$1")
    .replace(/tɕʰ|tɕ/g, "ch")
    .replace(/pʰ/g, "ph")
    .replace(/tʰ/g, "th")
    .replace(/kʰ/g, "kh")
    .replace(/ŋ/g, "ng")
    .replace(/ɯa/g, "uea")
    .replace(/ɯ/g, "ue")
    .replace(/ɤ/g, "oe")
    .replace(/ɛ/g, "ae")
    .replace(/ɔ/g, "o")
    .replace(/oej/g, "oei")
    .replace(/aew/g, "aeo")
    .replace(/([aou])j(?![aeiou])/g, "$1i")
    .replace(/aw(?![aeiou])/g, "ao")
    .replace(/([ie])w(?![aeiou])/g, "$1o")
    .replace(/j/g, "y");

export const rtgsSkeleton = (rtgs: string): string => rtgs.toLowerCase().replace(/[\s\-·']/g, "");

const RTGS_VOWELS: [RegExp, string][] = [
  [/ueai/g, "ɯaj"],
  [/uea/g, "ɯa"],
  [/uai/g, "uaj"],
  [/iao/g, "iaw"],
  [/oei/g, "ɤj"],
  [/aeo/g, "ɛw"],
  [/ae/g, "ɛ"],
  [/oe/g, "ɤ"],
  [/ue/g, "ɯ"],
  [/ai/g, "aj"],
  [/ao/g, "aw"],
  [/oi/g, "ɔj"],
  [/ui/g, "uj"],
  [/eo/g, "ew"],
  [/io/g, "iw"],
];

// IPA of an RTGS romanization whose syllables are joined with "-" (no vowel length, as RTGS has none)
export const rtgsToIpa = (rtgs: string): string =>
  rtgs
    .toLowerCase()
    .split(/[-\s]+/)
    .filter(Boolean)
    .map(syllable => {
      let ipa = syllable
        .replace(/kh/g, "kʰ")
        .replace(/ph/g, "pʰ")
        .replace(/th/g, "tʰ")
        .replace(/ch/g, "tɕʰ")
        .replace(/ng/g, "ŋ");
      for (const [vowel, replacement] of RTGS_VOWELS) {
        ipa = ipa.replace(vowel, replacement);
      }
      ipa = ipa.replace(/y/g, "j");
      return /^[aeiouɛɤɯɔ]/.test(ipa) ? "ʔ" + ipa : ipa;
    })
    .join("");

const CONSONANT = /tɕʰ|tɕ|[pkt]ʰ|[bdfhklmnprstwjŋʔ]/g;
const isOnset = (consonants: string[]) =>
  consonants.length <= 1 ||
  (consonants.length === 2 &&
    /^(k|kʰ|p|pʰ|t|tʰ)$/.test(consonants[0]) &&
    /^[rlw]$/.test(consonants[1]));
// th-ipa leaves some final stops aspirated (เทพ → tʰeːpʰ), which is still a possible syllable
const isCoda = (consonant: string) => /^([ptk]ʰ?|[mnŋjwʔ])$/.test(consonant);

// Whether an IPA reading is made of possible Thai syllables: onsets are one consonant or
// k/kʰ/p/pʰ/t + r/l/w, codas one of p t k m n ŋ j w ʔ. th-ipa breaks this when it misses an
// unwritten vowel (สวัสดี → swatdi, อุบล → upl)
export const isThaiSyllabic = (ipa: string): boolean => {
  const parts = ipa
    .normalize("NFD")
    .replace(/[˥˦˧˨˩ːˑ]|\p{M}/gu, "")
    .split(/([aeiouɛɤɯɔ]+)/);
  for (let i = 0; i < parts.length; i += 2) {
    const consonants = parts[i].match(CONSONANT) ?? [];
    if (parts[i].replace(CONSONANT, "") !== "") return false;
    if (i === 0) {
      if (!isOnset(consonants)) return false;
    } else if (i === parts.length - 1) {
      if (consonants.length > 1 || (consonants.length === 1 && !isCoda(consonants[0]))) {
        return false;
      }
    } else if (
      !isOnset(consonants) &&
      !(isCoda(consonants[0] ?? "") && isOnset(consonants.slice(1)))
    ) {
      return false;
    }
  }
  return true;
};

// Consonants of a reading: the romanizer drops some of a word's letters when it misreads it
// (พงศกร → phan), while th-ipa keeps them all and misses only vowels. th-ipa's tʰr counts once,
// as native ทร is s (ทราย → sai)
export const rtgsConsonantCount = (rtgs: string): number =>
  (rtgs.toLowerCase().match(/kh|ph|th|ch|ng|[bdfhklmnprstwy]/g) ?? []).length;

export const ipaConsonantCount = (ipa: string): number =>
  (
    ipa
      .normalize("NFD")
      .replace(/[˥˦˧˨˩ːˑ]|\p{M}/gu, "")
      .match(/tʰr|tɕʰ|tɕ|[pkt]ʰ|[bdfhklmnprstŋ]|[jw](?=[aeiouɛɤɯɔ])/g) ?? []
  ).length;

const isOnsetUnit = (unit: string) => /^(tɕʰ|tɕ|[pkt]ʰ|[bdfhklmnprstwjŋʔ])$/.test(unit);

// th-ipa misses unwritten vowels (สวัสดี → swat̚diː): this puts an "a" into each cluster that no
// Thai syllable allows, keeping the reading's vowel length (sawat̚diː)
export const insertImplicitVowels = (ipa: string, closeSyllables = false): string => {
  const units =
    ipa
      .normalize("NFD")
      .replace(/[˥˦˧˨˩]|\u031A/gu, "")
      .match(/tɕʰ|tɕ|[pkt]ʰ|[bdfhklmnprstwjŋʔ]|[aeiouɛɤɯɔ]ː?|./gu) ?? [];
  let result = "";
  let cluster: string[] = [];
  let afterVowel = false;
  const flush = (final: boolean) => {
    const consonants = [...cluster];
    cluster = [];
    if (
      afterVowel &&
      consonants.length &&
      (final || !isOnset(consonants)) &&
      isCoda(consonants[0])
    ) {
      result += consonants.shift();
    }
    if (final) {
      result += consonants.join("a");
      return;
    }
    while (consonants.length > 1 && !isOnset(consonants)) {
      const onset = consonants.shift();
      // the added vowel can close its syllable, where Thai reads it as o (มงคล → moŋkʰon), or stay
      // open as a (สวัสดี → sawat̚diː, compounds like กาญจนบุรี → kaːntɕanaburiː)
      if (
        closeSyllables &&
        consonants.length > 1 &&
        isCoda(consonants[0]) &&
        isOnset(consonants.slice(1))
      ) {
        result += onset + "o" + consonants.shift();
      } else {
        result += onset + "a";
      }
    }
    result += consonants.join("");
  };
  for (const unit of units) {
    if (isOnsetUnit(unit)) {
      cluster.push(unit);
    } else if (/^[aeiouɛɤɯɔ]/.test(unit)) {
      flush(false);
      afterVowel = true;
      result += unit;
    } else {
      result += unit;
    }
  }
  flush(true);
  return result;
};
