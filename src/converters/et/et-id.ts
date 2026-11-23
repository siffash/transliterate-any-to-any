import { Text } from "types";

export const etId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, etLatnRules + latnIdRules);
};
