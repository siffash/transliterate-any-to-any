import { Text } from "types";

export const hyRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoARules } = await import("data/latn/latn-ro_a.rules");
  const { latnGhHRules } = await import("data/latn/latn_gh-h.rules");

  const transliterator = RBT.fromRules(
    hyLatnRules + latnGhHRules + latnDzRules + latnRoRules + latnRoARules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
