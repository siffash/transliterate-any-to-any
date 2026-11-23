import { Text } from "types";

export const bsAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, bsLatnRules + latnAzRules);
};
