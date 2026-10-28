import { Text } from "types";

export const slEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  const transliterator = RBT.fromRules(
    slLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnEtRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
