import { Text } from "types";

export const slSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("constants/sl-latn.rules");
  const { latnSvRules } = await import("constants/latn-sv.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
