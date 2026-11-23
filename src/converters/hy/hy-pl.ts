import { Text } from "types";

export const hyPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnPlRules } = await import("data/hy/hy-latn_pl.rules");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  return convertText(text, hyLatnPlRules + hyLatnRules + latnPlRules);
};
