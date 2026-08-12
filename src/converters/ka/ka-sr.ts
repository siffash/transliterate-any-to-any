import { Text } from "types";

export const kaSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaLatnRules } = await import("constants/ka-latn.rules");
  const { latnSrRules } = await import("constants/latn-sr.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
