import { Text } from "types";

export const huTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnYiRules } = await import("data/hu/hu-latn_yi.rules");
  const { huLatnGyDropRules } = await import("data/hu/hu-latn_gy-drop.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  const transliterator = RBT.fromRules(
    huLatnRules + huLatnYRules + huLatnYiRules + huLatnGyDropRules + latnTgRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
