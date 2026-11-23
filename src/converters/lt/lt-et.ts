import { Text } from "types";

export const ltEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, ltLatnRules + latnEtRules);
};
