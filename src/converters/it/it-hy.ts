import { Text } from "types";

export const itHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnSantSpaceRules } = await import("data/it/it-latn_sant-space.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  const transliterator = RBT.fromRules(
    itLatnRules + itLatnSantSpaceRules + latnHyRules + hyEvRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
