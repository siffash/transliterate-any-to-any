import { Text } from "types";

export const kaEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaLatnEtRules } = await import("data/ka/ka-latn_et.rules");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  const transliterator = RBT.fromRules(kaLatnEtRules + kaLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
