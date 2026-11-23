import { Text } from "types";

export const etNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, etLatnRules + latnIRules + latnNlRules);
};
