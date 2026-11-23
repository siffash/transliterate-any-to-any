import { Text } from "types";

export const esPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  return convertText(text, esLatnRules + latnPlRules);
};
