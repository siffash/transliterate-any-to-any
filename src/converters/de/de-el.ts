import { Text } from "types";

export const deEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");
  const { deElNgRules } = await import("data/de/de-el_ng.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnElRules + deElNgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
