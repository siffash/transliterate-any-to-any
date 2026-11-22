import { Text } from "types";

export const azKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { latnKaAspirateRules } = await import("data/latn/latn-ka_aspirate.rules");
  const { latnKaIuRules } = await import("data/latn/latn-ka_iu.rules");
  const { azLatnKaQRules } = await import("data/az/az-latn_ka-q.rules");

  const transliterator = RBT.fromRules(
    azLatnKaQRules + azLatnRules + latnKaAspirateRules + latnKaIuRules + latnKaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
