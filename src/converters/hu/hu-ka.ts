import { Text } from "types";

export const huKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnEoHoldRules } = await import("data/hu/hu-latn_eo-hold.rules");
  const { huLatnEoRestoreRules } = await import("data/hu/hu-latn_eo-restore.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyDropRules } = await import("data/hu/hu-latn_gy-drop.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { latnKaIuRules } = await import("data/latn/latn-ka_iu.rules");

  const transliterator = RBT.fromRules(
    huLatnEoHoldRules +
      huLatnRules +
      huLatnEoRestoreRules +
      huLatnYRules +
      huLatnGyDropRules +
      latnKaIuRules +
      latnKaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
