import { Text } from "types";

export const azDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, azLatnRules + latnIRules + latnDeRules);
};
