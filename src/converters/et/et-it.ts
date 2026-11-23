import { Text } from "types";

export const etIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");

  return convertText(text, etLatnRules + latnItRules);
};
