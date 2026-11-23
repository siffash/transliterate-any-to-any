import { Text } from "types";

export const idIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, msIdLatnRules + latnIsRules);
};
