import { Text } from "types";

export const nlFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, nlLatnRules + latnGhGRules + latnFrRules);
};
