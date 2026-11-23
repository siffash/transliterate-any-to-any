import { Text } from "types";

export const caCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  return convertText(text, caLatnRules + latnCsRules);
};
