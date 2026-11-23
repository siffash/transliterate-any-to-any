import { Text } from "types";

export const bsHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  return convertText(text, bsLatnRules + latnHrRules);
};
