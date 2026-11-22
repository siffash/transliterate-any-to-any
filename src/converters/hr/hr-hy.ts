import { Text } from "types";

export const hrHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { latnHyCRules } = await import("data/latn/latn-hy_c.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnHyCRules + latnHyRules + hyEvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
