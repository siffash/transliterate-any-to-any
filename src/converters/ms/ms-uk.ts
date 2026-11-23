import { Text } from "types";

export const msUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  return convertText(text, msIdLatnRules + latnUkRules);
};
