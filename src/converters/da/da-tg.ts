import { Text } from "types";

export const daTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, daLatnRules + latnSilentHRules + latnTgRules);
};
