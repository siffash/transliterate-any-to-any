import { Text } from "types";

export const srNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  const transliterator = RBT.fromRules(
    srLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnNlRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
