import { Text } from "types";

export const ruId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruLatnRules } = await import("data/ru-latn.rules");
  const { latnIdRules } = await import("data/latn-id.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
