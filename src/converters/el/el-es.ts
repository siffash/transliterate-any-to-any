import { Text } from "types";

export const elEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnXRules } = await import("data/latn/latn_x.rules");

  return convertText(text, elLatnRules + latnEsRules + latnXRules);
};
