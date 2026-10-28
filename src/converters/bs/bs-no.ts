import { Text } from "types";

export const bsNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  const transliterator = RBT.fromRules(
    bsLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnNoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
