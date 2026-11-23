import { Text } from "types";

export const csRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { csSkLatnPalatalRules } = await import("data/latn/cs_sk-latn_palatal.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { latnRuHRules } = await import("data/latn/latn-ru_h.rules");
  const { latnRuPalatalRules } = await import("data/latn/latn-ru_palatal.rules");
  const { csCyrlRuLnRules } = await import("data/cs/cs-cyrl_ru-ln.rules");

  return convertText(
    text,
    csSkLatnPalatalRules +
      csLatnRules +
      latnRuHRules +
      latnRuPalatalRules +
      latnRuRules +
      csCyrlRuLnRules,
  );
};
