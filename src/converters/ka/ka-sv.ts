import { Text } from "types";

export const kaSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
