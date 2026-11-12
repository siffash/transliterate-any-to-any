// Reads a Thai word two ways and picks one. th-ipa.rules keep vowel length but often miss
// unwritten vowels (อยุธยา → jutjaː), while the romanizer reads them but has no length and
// sometimes drops letters of names it doesn't know (พงศกร → phan). In order:
// • both agree: the rules' reading (with length) and the romanizer's spelling;
// • the rules' reading becomes the romanizer's once the missing vowels are put back (สวัสดี);
// • the romanizer has fewer consonants than the rules' reading: the rules' reading, with missing
//   vowels put back if it needs them (พงศกร → pʰoŋsakɔːn);
// • the romanizer is sure, or the rules' reading has syllables Thai doesn't: the romanizer's;
// • otherwise the rules' reading.
// The romanizer's own non-RTGS spellings (Suvarnabhumi) are kept for Latin output only
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
    if (/[๐-๙]/.test(word) || agrees(ipa)) {
      return { ipa, rtgs };
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

  // A compound name is read piece by piece (see segmentThai). A piece that ends in ร after i or u, or
  // in ทธ, links to the next one with "a", as inside a piece: จิร|วัฒน์ Chirawat (like สุรศักดิ์ Surasak),
  // พุทธ|มณฑล Phutthamonthon, but ยงยุทธ Yongyut
  const link = (piece: string, { ipa, rtgs }: { ipa: string; rtgs: string }) => {
    if (/[ิีุู]ร$/u.test(piece) && /n$/.test(rtgs)) {
      return { ipa: ipa.replace(/n$/, "ra"), rtgs: rtgs.replace(/n$/, "ra") };
    }
    if (/ทธ$/u.test(piece) && /t$/.test(rtgs)) {
      return { ipa: ipa.replace(/t̚$/, "t̚tʰa"), rtgs: rtgs.replace(/t$/, "ttha") };
    }
    return { ipa, rtgs };
  };

  return (word: string): { ipa: string; rtgs: string } => {
    const pieces = segmentThai(word);
    const readings = pieces.map((piece, i) =>
      i < pieces.length - 1 ? link(piece, readPiece(piece)) : readPiece(piece),
    );
    return {
      ipa: readings.map(reading => reading.ipa).join(""),
      rtgs: readings.map(reading => reading.rtgs).join(""),
    };
  };
};

// The IPA of a Thai word (see thaiReader)
export const thIpa = async () => {
  const read = await thaiReader();
  return (word: string): string => read(word).ipa;
};

// The RTGS romanization of a Thai word (see thaiReader)
export const thRtgs = async () => {
  const read = await thaiReader();
  return (word: string): string => read(word).rtgs;
};
