import { Text } from "types";

export const noSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { noLatnAuRules } = await import("data/no/no-latn_au.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  const transliterator = RBT.fromRules(
    noLatnRules + noLatnAuRules + latnSilentHRules + latnThTRules + latnSqRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
