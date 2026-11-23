import { Text } from "types";

export const plNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, plLatnRules + latnNoRules);
};
