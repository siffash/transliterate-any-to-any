import { Text } from "types";

export const etPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  return convertText(text, etLatnRules + latnPlRules);
};
