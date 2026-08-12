export const restoreLettersInIpa = (
  originalWord: string,
  result: string,
  ipaToBeReplaced: string,
  lettersToRestore: Record<string, string>,
  { start, end }: { start: number; end: number } = { start: 2, end: 3 },
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
      const originalWordStart = ipaIndexFromStart - start;
      const originalWordEnd = ipaIndexFromStart + ipaToBeReplaced.length + start;
      originalWordPart = originalWord.slice(
        originalWordStart < 0 ? 0 : originalWordStart,
        originalWordEnd,
      );
    } else {
      // check 2nd half of the string
      const originalWordStart = ipaIndexFromEnd * -1 - ipaToBeReplaced.length - end;
      const originalWordEnd = ipaIndexFromEnd * -1 + end;
      originalWordPart = originalWord.slice(
        originalWordStart,
        originalWordEnd >= 0 ? undefined : originalWordEnd,
      );
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
