import { Text } from "types";

export const bsFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
