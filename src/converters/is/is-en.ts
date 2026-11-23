import { Text } from "types";

export const isEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, isLatnRules + latnGhGRules + latnEnRules);
};
