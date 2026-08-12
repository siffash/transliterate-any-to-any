import { Text } from "types";

export const kaUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaLatnRules } = await import("constants/ka-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
