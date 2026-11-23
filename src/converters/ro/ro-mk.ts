import { Text } from "types";

export const roMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnGlideRules } = await import("data/ro/ro-latn_glide.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, roLatnRules + roLatnGlideRules + latnMkRules);
};
