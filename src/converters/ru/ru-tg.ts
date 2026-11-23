import { Text } from "types";

export const ruTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { ruTgShchRules } = await import("data/ru/ru-tg_shch.rules");

  return convertText(text, ruLatnRules + latnTgRules + ruTgShchRules);
};
