import { Text } from "types";

export const etAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { etLatnAzRules } = await import("data/et/et-latn_az.rules");

  return convertText(text, etLatnRules + etLatnAzRules + latnAzRules);
};
