import { Text } from "types";

export const plBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { plLatnCyrlRules } = await import("data/pl/pl-latn_cyrl.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, plLatnCyrlRules + plLatnRules + latnIRules + latnBgRules);
};
