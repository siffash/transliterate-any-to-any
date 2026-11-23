import { Text } from "types";

export const trEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, trLatnRules + latnGhGRules + latnEnRules);
};
