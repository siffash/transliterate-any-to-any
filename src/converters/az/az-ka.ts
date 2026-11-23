import { Text } from "types";

export const azKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { latnKaAspirateRules } = await import("data/latn/latn-ka_aspirate.rules");
  const { latnKaIuRules } = await import("data/latn/latn-ka_iu.rules");
  const { azLatnKaQRules } = await import("data/az/az-latn_ka-q.rules");

  return convertText(
    text,
    azLatnKaQRules + azLatnRules + latnKaAspirateRules + latnKaIuRules + latnKaRules,
  );
};
