import { Text } from "types";

export const idAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, msIdLatnRules + latnAzRules);
};
