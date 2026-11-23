import { Text } from "types";

export const ltKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(text, ltLatnRules + latnKaRules);
};
