import { Text } from "types";

export const msEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, msIdLatnRules + latnEsRules);
};
