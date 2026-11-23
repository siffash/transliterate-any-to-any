import { Text } from "types";

export const kaPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  return convertText(text, kaLatnRules + latnGGhRules + latnPlRules);
};
