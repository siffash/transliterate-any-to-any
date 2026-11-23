import { Text } from "types";

export const mtNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, mtLatnRules + latnNoRules);
};
