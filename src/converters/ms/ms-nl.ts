import { Text } from "types";

export const msNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  return convertText(text, msIdLatnRules + latnNlRules);
};
