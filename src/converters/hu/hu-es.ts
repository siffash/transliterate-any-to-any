import { Text } from "types";

export const huEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnShSRules } = await import("data/latn/latn_sh-s.rules");

  const transliterator = RBT.fromRules(
    huLatnRules + huLatnYRules + huLatnGyRules + latnShSRules + latnEsRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
