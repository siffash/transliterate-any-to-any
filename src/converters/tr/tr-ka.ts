import { Text } from "types";

export const trKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnFrontGhRules } = await import("data/tr/tr-latn_front-gh.rules");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { latnKaAspirateRules } = await import("data/latn/latn-ka_aspirate.rules");

  return convertText(text, trLatnFrontGhRules + trLatnRules + latnKaAspirateRules + latnKaRules);
};
