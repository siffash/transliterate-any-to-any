import { Text } from "types";

export const svNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, svLatnRules + latnNoRules);
};
