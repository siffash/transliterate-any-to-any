import { Text } from "types";

export const etSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, etLatnRules + latnSkRules);
};
