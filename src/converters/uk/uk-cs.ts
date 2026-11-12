import { Text } from "types";

export const ukCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnCsSoftRules } = await import("data/latn/latn-cs_soft.rules");
  const { ukLatnCsRules } = await import("data/uk/uk-latn_cs.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");
  const { latnCsYRestoreRules } = await import("data/latn/latn-cs_y-restore.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules +
      latnCsSoftRules +
      ukLatnCsRules +
      latnSeparatorRules +
      latnCsRules +
      latnCsYRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
