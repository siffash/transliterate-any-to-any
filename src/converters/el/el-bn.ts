import { Text } from "types";

export const elBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elIpaRules } = await import("data/el-ipa.rules");
  const { ipaBnRules } = await import("data/ipa-bn.rules");

  const transliterator = RBT.fromRules(elIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
