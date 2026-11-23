import { Text } from "types";

export const slCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  return convertText(text, slLatnRules + latnCsRules);
};
