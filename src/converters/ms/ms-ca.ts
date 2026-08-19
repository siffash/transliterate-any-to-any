import { Text } from "types";

export const msCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("data/ms/ms-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
