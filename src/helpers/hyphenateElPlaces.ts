const GENERIC = new Set([
  "νεα",
  "νεος",
  "νεο",
  "νεοι",
  "αγιος",
  "αγια",
  "αγιο",
  "αγιοι",
  "ανω",
  "κατω",
  "αρχαια",
  "αρχαιο",
  "παλαια",
  "παλαιο",
  "παλαιος",
  "μικρη",
  "μικρο",
  "μικρος",
  "μεγαλη",
  "μεγαλο",
  "μεγαλος",
]);

const bare = (word: string) => word.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

export const hyphenateElPlaces = (text: string): string =>
  text.replace(/(?<![\p{L}\p{M}'’-])([\p{L}\p{M}]+) (?=\p{L})/gu, (match, word: string) =>
    GENERIC.has(bare(word)) ? `${word}-` : match,
  );
