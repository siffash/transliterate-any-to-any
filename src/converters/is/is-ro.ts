import { Text } from "types";

export const isRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  return convertText(text, isLatnRules + latnGhGRules + latnRoRules);
};
