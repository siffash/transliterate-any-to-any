import { Text } from "types";

export const hyUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { hyLatnGhRules } = await import("data/hy/hy-latn_gh.rules");
  const { hyLatnH0Rules } = await import("data/hy/hy-latn_h0.rules");
  const { hyLatnHRules } = await import("data/hy/hy-latn_h.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { latnApostropheDropRules } = await import("data/latn/latn_apostrophe-drop.rules");

  const transliterator = RBT.fromRules(
    hyLatnRules +
      hyLatnGhRules +
      hyLatnHRules +
      hyLatnH0Rules +
      latnUkRules +
      latnApostropheDropRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
