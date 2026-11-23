import { Text } from "types";

export const bgHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgRRules } = await import("data/bg/bg_r.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  return convertText(text, bgRRules + bgLatnRules + latnHrRules);
};
