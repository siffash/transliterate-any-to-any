const restoreLettersInFrIpa = (
  originalWord: string,
  result: string,
  ipaToBeReplaced: string,
  lettersToRestore: Record<string, string>,
): string => {
  const total = (result.match(new RegExp(ipaToBeReplaced, "g")) || []).length;

  if (total === 0) {
    return result;
  }

  for (let i = 0; i < total; i++) {
    const ipaLength = result.length;
    const ipaIndexFromStart = result.indexOf(ipaToBeReplaced);
    const ipaIndexFromEnd = ipaLength - ipaIndexFromStart - ipaToBeReplaced.length;

    let originalWordPart;
    if (ipaIndexFromStart < ipaIndexFromEnd) {
      // check 1st half of the string
      const start = ipaIndexFromStart - 2;
      const end = ipaIndexFromStart + ipaToBeReplaced.length + 2;
      originalWordPart = originalWord.slice(start < 0 ? 0 : start, end);
    } else {
      // check 2nd half of the string
      const start = ipaIndexFromEnd * -1 - ipaToBeReplaced.length - 3;
      const end = ipaIndexFromEnd * -1 + 3;
      originalWordPart = originalWord.slice(start, end >= 0 ? undefined : end);
    }

    const restoredLetter = Object.keys(lettersToRestore).find(letter =>
      originalWordPart.includes(letter),
    );

    if (restoredLetter) {
      result =
        result.slice(0, ipaIndexFromStart) +
        lettersToRestore[restoredLetter] +
        result.slice(ipaIndexFromStart + ipaToBeReplaced.length);
    } else {
      result =
        result.slice(0, ipaIndexFromStart) +
        "_" +
        result.slice(ipaIndexFromStart + ipaToBeReplaced.length);
    }
  }

  return result.replaceAll("_", ipaToBeReplaced);
};

export const frIpaNormalizer = (originalWord: string, ipaWord: string): string => {
  let result = ipaWord;

  // Restore "g" in "bourg"
  if (originalWord.endsWith("bourg") && !/[gɡɠɢɣɰ]$/.test(result)) {
    result = result + "ɡ";
  }

  // Restore "n"/"m" instead of tilde
  result = restoreLettersInFrIpa(originalWord, result, "̃", { n: "n", m: "m" });

  // Restore "u" instead of "w"
  result = restoreLettersInFrIpa(originalWord, result, "w", { u: "u", oi: "u" });

  // Restore "ɛl" instead of "ɛj"
  result = restoreLettersInFrIpa(originalWord, result, "ɛj", { eil: "ɛl", eille: "ɛl" });

  return result;
};
