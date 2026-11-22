import { Text } from "types";

export const bsHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { latnHyCRules } = await import("data/latn/latn-hy_c.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnHyCRules + latnHyRules + hyEvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
