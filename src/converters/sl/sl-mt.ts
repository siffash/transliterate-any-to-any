import { Text } from "types";

export const slMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  const transliterator = RBT.fromRules(
    slLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnMtRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
