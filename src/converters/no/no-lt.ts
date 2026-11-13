import { Text } from "types";

export const noLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { noLatnAuRules } = await import("data/no/no-latn_au.rules");
  const { noLatnLtRules } = await import("data/no/no-latn_lt.rules");
  const { noSvLatnLtRules } = await import("data/latn/no_sv-latn_lt.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  const transliterator = RBT.fromRules(
    noLatnLtRules + noSvLatnLtRules + noLatnRules + noLatnAuRules + latnLtRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
