import { Text } from "types";

export const trSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { trLatnGRules } = await import("data/tr/tr-latn_g.rules");
  const { trLatnIyaRules } = await import("data/tr/tr-latn_iya.rules");
  const { trAzKkLatnOuRules } = await import("data/latn/tr_az_kk-latn_ou.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(
    text,
    trLatnGRules + trLatnRules + trLatnIyaRules + trAzKkLatnOuRules + latnSrRules,
  );
};
