export const toHalfwidth = (text: string, wordBefore: boolean, wordAfter: boolean) =>
  text
    .replace(/\s+(?=[\uFF0C\uFF0E\uFF1A\uFF1B\uFF01\uFF1F\uFF09])/g, "")
    .replace(/[\uFF01-\uFF5E]/g, (char, offset: number, rest: string) => {
      const mark = String.fromCharCode(char.charCodeAt(0) - 0xfee0);
      const prev = rest[offset - 1];
      const next = rest[offset + 1];
      if (
        /[,;:!?)]/.test(mark) &&
        (next ? !/[\s.,;:!?)\uFF0E\uFF0C\uFF1B\uFF1A\uFF01\uFF1F\uFF09]/.test(next) : wordAfter)
      ) {
        return mark + " ";
      }
      if (mark === "(" && (prev ? !/[\s(\uFF08]/.test(prev) : wordBefore)) return " " + mark;
      return mark;
    });
