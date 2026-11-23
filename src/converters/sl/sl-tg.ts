import { Text } from "types";

export const slTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(text, slLatnRules + latnTgRules);
};
