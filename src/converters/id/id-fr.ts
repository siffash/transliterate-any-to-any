import { Text } from "types";

export const idFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(msIdLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
