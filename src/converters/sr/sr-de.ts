import { Text } from "types";

export const srDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  const transliterator = RBT.fromRules(
    srLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnDeRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
