import { Text } from "types";

export const mtMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, mtLatnRules + latnMkRules);
};
