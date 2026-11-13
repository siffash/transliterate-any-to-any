import { Text } from "types";

export const esAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { esLatnYHoldRules } = await import("data/es/es-latn_y-hold.rules");
  const { esLatnGwRules } = await import("data/es/es-latn_gw.rules");
  const { esLatnAzRules } = await import("data/es/es-latn_az.rules");
  const { latnAzLyeRules } = await import("data/latn/latn-az_lye.rules");
  const { esLatnYRestoreRules } = await import("data/es/es-latn_y-restore.rules");

  const transliterator = RBT.fromRules(
    esLatnYHoldRules +
      esLatnRules +
      esLatnGwRules +
      esLatnAzRules +
      esLatnYRestoreRules +
      latnAzLyeRules +
      latnAzRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
