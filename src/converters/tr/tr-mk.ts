import { Text } from "types";

export const trMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnFrontGRules } = await import("data/tr/tr-latn_front-g.rules");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { trAzKkLatnOuRules } = await import("data/latn/tr_az_kk-latn_ou.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, trLatnFrontGRules + trLatnRules + trAzKkLatnOuRules + latnMkRules);
};
