import { Text } from "types";

export const trHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trLatnFrontGhRules } = await import("data/tr/tr-latn_front-gh.rules");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { trLatnHyRules } = await import("data/tr/tr-latn_hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  const transliterator = RBT.fromRules(
    trLatnFrontGhRules + trLatnRules + trLatnHyRules + latnHyRules + hyEvRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
