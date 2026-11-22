import { Text } from "types";

export const etHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { etLatnHyRules } = await import("data/et/et-latn_hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  const transliterator = RBT.fromRules(etLatnRules + etLatnHyRules + latnHyRules + hyEvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
