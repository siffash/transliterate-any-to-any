import { Text } from "types";

export const msFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { msLatnRules } = await import("data/ms/ms-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
