import { Text } from "types";

export const idLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  return convertText(text, msIdLatnRules + latnLbRules);
};
