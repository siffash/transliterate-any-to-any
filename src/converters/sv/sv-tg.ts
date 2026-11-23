import { Text } from "types";

export const svTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, svLatnRules + latnSilentHRules + latnTgRules);
};
