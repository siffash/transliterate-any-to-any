import { Text } from "types";

export const bgSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgRRules } = await import("data/bg/bg_r.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");
  const { bgLatnSlRules } = await import("data/bg/bg-latn_sl.rules");

  return convertText(text, bgRRules + bgLatnRules + latnSlRules + bgLatnSlRules);
};
