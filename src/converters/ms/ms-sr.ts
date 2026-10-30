import { Text } from "types";

export const msSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  const transliterator = RBT.fromRules(msIdLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
