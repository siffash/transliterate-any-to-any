import { Text } from "types";

export const plLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { plLatnLtRules } = await import("data/pl/pl-latn_lt.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");
  const { plLatnLtRestoreRules } = await import("data/pl/pl-latn_lt-restore.rules");

  const transliterator = RBT.fromRules(
    plLatnLtRules + plLatnRules + latnHoldRestoreRules + latnLtRules + plLatnLtRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
