import { Text } from "types";

export const plHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, plLatnRules + latnIRules + latnHyRules + hyEvRules);
};
