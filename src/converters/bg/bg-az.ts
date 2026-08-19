import { Text } from "types";

export const bgAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
