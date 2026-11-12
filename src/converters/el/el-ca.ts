import { Text } from "types";

export const elCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnCaGHoldRules } = await import("data/latn/latn-ca_g-hold.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnCaGRestoreRules } = await import("data/latn/latn-ca_g-restore.rules");

  const transliterator = RBT.fromRules(
    elLatnRules + latnCaGHoldRules + latnCaRules + latnCaGRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
