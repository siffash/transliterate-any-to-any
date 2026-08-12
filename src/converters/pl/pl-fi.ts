import { Text } from "types";

export const plFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plLatnRules } = await import("data/pl-latn.rules");
  const { latnFiRules } = await import("data/latn-fi.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
