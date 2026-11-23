import { Text } from "types";

export const elDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, elLatnRules + latnDeRules);
};
