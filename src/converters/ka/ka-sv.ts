import { Text } from "types";

export const kaSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  const transliterator = RBT.fromRules(
    kaLatnRules + latnDzjRules + latnQHoldRules + latnGGhRules + latnSvRules + latnQRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
