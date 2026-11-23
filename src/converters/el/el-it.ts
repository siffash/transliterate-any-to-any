import { Text } from "types";

export const elIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { elLatnItRules } = await import("data/el/el-latn_it.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");
  const { latnItIiRules } = await import("data/latn/latn-it_ii.rules");

  return convertText(text, elLatnRules + elLatnItRules + latnItRules + latnItIiRules);
};
