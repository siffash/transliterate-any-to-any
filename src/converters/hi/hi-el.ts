import { Text } from "types";

export const hiEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiLatnRules } = await import("data/hi/hi-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  const transliterator = RBT.fromRules(hiLatnRules + latnElRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
