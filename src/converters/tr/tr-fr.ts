import { Text } from "types";

export const trFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, trLatnRules + latnGhGRules + latnIRules + latnFrRules);
};
