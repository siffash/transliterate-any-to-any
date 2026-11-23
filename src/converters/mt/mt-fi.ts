import { Text } from "types";

export const mtFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  return convertText(text, mtLatnRules + latnFiRules);
};
