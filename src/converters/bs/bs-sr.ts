import { Text } from "types";

export const bsSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, bsLatnRules + latnSrRules);
};
