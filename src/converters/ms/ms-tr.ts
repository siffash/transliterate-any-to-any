import { Text } from "types";

export const msTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msLatnRules } = await import("data/ms/ms-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
