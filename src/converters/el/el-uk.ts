import { Text } from "types";

export const elUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyphenateElPlaces } = await import("helpers/hyphenateElPlaces");
  const { elLatnCyrlRules } = await import("data/el/el-latn_cyrl.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnUkHiatusRules } = await import("data/latn/latn-uk_hiatus.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  return convertText(text, elLatnCyrlRules + elLatnRules + latnUkHiatusRules + latnUkRules, {
    source: words => words.map(word => hyphenateElPlaces(word)),
  });
};
