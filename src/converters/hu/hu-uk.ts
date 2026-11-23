import { Text } from "types";

export const huUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnCyrlRules } = await import("data/hu/hu-latn_cyrl.rules");
  const { latnUkHiatusRules } = await import("data/latn/latn-uk_hiatus.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  return convertText(text, huLatnRules + huLatnCyrlRules + latnUkHiatusRules + latnUkRules);
};
