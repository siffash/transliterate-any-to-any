import { Text } from "types";

export const trRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnFrontGRules } = await import("data/tr/tr-latn_front-g.rules");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnOeRules } = await import("data/latn/latn_oe.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { trCyrlFrontLRules } = await import("data/tr/tr-cyrl_front-l.rules");

  return convertText(
    text,
    trLatnFrontGRules + trLatnRules + latnOeRules + latnRuRules + trCyrlFrontLRules,
  );
};
