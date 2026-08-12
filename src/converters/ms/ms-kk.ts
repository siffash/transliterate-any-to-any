import { Text } from "types";

export const msKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("constants/ms-latn.rules");
  const { latnKkRules } = await import("constants/latn-kk.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
