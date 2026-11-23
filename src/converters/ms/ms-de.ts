import { Text } from "types";

export const msDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  return convertText(text, msIdLatnRules + latnDeRules);
};
