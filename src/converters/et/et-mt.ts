import { Text } from "types";

export const etMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(text, etLatnRules + latnMtRules);
};
