import { Text } from "types";

export const hyNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  return convertText(text, hyLatnRules + latnDzjRules + latnNlRules);
};
