import { Text } from "types";

export const csBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
