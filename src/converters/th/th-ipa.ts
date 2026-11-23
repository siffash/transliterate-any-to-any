import { Text } from "types";

export const thaiReader = async () => {
  const { romanizeDetailed } = await import("@pcampus/thai-romanization");
  const { RBT } = await import("helpers/rbt");
  const { thIpaRules } = await import("data/th/th-ipa.rules");
  const {
    ipaToRtgs,
    rtgsSkeleton,
    rtgsToIpa,
    isThaiSyllabic,
    rtgsConsonantCount,
    ipaConsonantCount,
    insertImplicitVowels,
  } = await import("helpers/thaiIpa");
  const { segmentThai } = await import("helpers/segmentThai");

  const transliterator = RBT.fromRules(thIpaRules);

  const readPiece = (word: string): { ipa: string; rtgs: string } => {
    const ipa = transliterator.transliterate(word);
    const { text, confidence } = romanizeDetailed(word, { separator: "-" });
    const rtgs = text.replace(/-/g, "");
    const agrees = (reading: string) => rtgsSkeleton(ipaToRtgs(reading)) === rtgsSkeleton(rtgs);
    if (/[๐-๙]/.test(word) || (agrees(ipa) && isThaiSyllabic(ipa))) {
      return { ipa, rtgs };
    }
    if (agrees(ipa)) {
      const reading = insertImplicitVowels(ipa, true);
      return { ipa: reading, rtgs: ipaToRtgs(reading) };
    }
    if (!isThaiSyllabic(ipa)) {
      const repaired = [insertImplicitVowels(ipa), insertImplicitVowels(ipa, true)].find(agrees);
      if (repaired) {
        return { ipa: repaired, rtgs };
      }
    }
    if (/[vqxz]|[bdg]h/.test(rtgs)) {
      return { ipa, rtgs };
    }
    if (rtgsConsonantCount(rtgs) < ipaConsonantCount(ipa)) {
      const reading = isThaiSyllabic(ipa) ? ipa : insertImplicitVowels(ipa, true);
      return { ipa: reading, rtgs: ipaToRtgs(reading) };
    }
    if (confidence === "high" || !isThaiSyllabic(ipa)) {
      return { ipa: rtgsToIpa(text), rtgs };
    }
    return { ipa, rtgs: ipaToRtgs(ipa) };
  };

  const link = (piece: string, { ipa, rtgs }: { ipa: string; rtgs: string }) => {
    if (/[ิีุู]ร$/u.test(piece) && /n$/.test(rtgs)) {
      return { ipa: ipa.replace(/n$/, "ra"), rtgs: rtgs.replace(/n$/, "ra") };
    }
    if (/ทธ$/u.test(piece) && /t$/.test(rtgs)) {
      return { ipa: ipa.replace(/t̚$/, "t̚tʰa"), rtgs: rtgs.replace(/t$/, "ttha") };
    }
    return { ipa, rtgs };
  };

  const readAt = (pieces: string[], i: number) => {
    const reading = readPiece(pieces[i]);
    if (i === 0 && /^[ก-ฮ]$/u.test(pieces[i]) && !/[aeiouɛɤɯɔ]/.test(reading.ipa)) {
      return { ipa: reading.ipa + "a", rtgs: ipaToRtgs(reading.ipa + "a") };
    }
    if (i > 0 && pieces[i] === "ทร" && pieces[i - 1].endsWith("า")) {
      return { ipa: "tʰɔːn", rtgs: "thon" };
    }
    return reading;
  };

  const read = (word: string): { ipa: string; rtgs: string } => {
    const pieces = segmentThai(word);
    const readings = pieces.map((piece, i) =>
      i < pieces.length - 1 ? link(piece, readAt(pieces, i)) : readAt(pieces, i),
    );
    return {
      ipa: readings.map(reading => reading.ipa).join(""),
      rtgs: readings.map(reading => reading.rtgs).join(""),
    };
  };

  return (word: string): { ipa: string; rtgs: string } => {
    const readings = word.split("-").map(part => (part ? read(part) : { ipa: "", rtgs: "" }));
    return {
      ipa: readings.map(reading => reading.ipa).join("-"),
      rtgs: readings.map(reading => reading.rtgs).join("-"),
    };
  };
};

export const thIpa = async () => {
  const read = await thaiReader();
  return (word: string): string => read(word).ipa;
};

export const thRtgs = async () => {
  const read = await thaiReader();
  return (word: string): string => read(word).rtgs;
};

export const thIpaText = async <T = Text>(text: Text, rules?: string): Promise<T> => {
  const { RBT } = await import("helpers/rbt");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeTh } = await import("helpers/normalizeTh");
  const { mapText } = await import("helpers/convertText");

  const toIpa = await thIpa();
  const transliterator = rules === undefined ? undefined : RBT.fromRules(rules);

  return (await mapText(text, text =>
    wordSplitter(normalizeTh(text), "th", word =>
      transliterator ? transliterator.transliterate(toIpa(word)) : toIpa(word),
    ),
  )) as T;
};
