import { Text } from "types";

export const plMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { plLatnIRules } = await import("data/pl/pl-latn_i.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  const transliterator = RBT.fromRules(plLatnRules + plLatnIRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
