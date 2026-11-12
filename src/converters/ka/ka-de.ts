import { Text } from "types";

export const kaDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { kaLatnJoinRules } = await import("data/ka/ka-latn_join.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  const transliterator = RBT.fromRules(
    kaLatnRules + kaLatnJoinRules + latnQHoldRules + latnDeRules + latnQRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
