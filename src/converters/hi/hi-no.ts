import { Text } from "types";

export const hiNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiLatnRules } = await import("data/hi/hi-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  const transliterator = RBT.fromRules(hiLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
