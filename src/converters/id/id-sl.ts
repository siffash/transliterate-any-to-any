import { Text } from "types";

export const idSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  return convertText(text, msIdLatnRules + latnSlRules);
};
