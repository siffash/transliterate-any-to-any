import { Text } from "types";

export const hyHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");
  const { hyLatnHuRules } = await import("data/hy/hy-latn_hu.rules");

  return convertText(text, hyLatnRules + latnHuRules + hyLatnHuRules);
};
