import { Text } from "types";

export const slSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, slLatnRules + latnSrRules);
};
