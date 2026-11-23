import { Text } from "types";

export const itTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnGgRules } = await import("data/it/it-latn_gg.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, itLatnRules + itLatnGgRules + latnTgRules);
};
