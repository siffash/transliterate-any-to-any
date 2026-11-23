import { Text } from "types";

export const isFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { isLatnFrRules } = await import("data/is/is-latn_fr.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, isLatnRules + latnGhGRules + isLatnFrRules + latnFrRules);
};
