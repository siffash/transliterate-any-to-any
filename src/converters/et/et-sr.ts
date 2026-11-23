import { Text } from "types";

export const etSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { etLatnEjRules } = await import("data/et/et-latn_ej.rules");

  return convertText(text, etLatnRules + etLatnEjRules + latnSrRules);
};
