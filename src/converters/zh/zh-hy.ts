import { Text } from "types";

export const zhHy = async (text: Text) => {
  const { zhRu } = await import("converters/zh/zh-ru");
  const { ruHy } = await import("converters/ru/ru-hy");
  const { convertText } = await import("helpers/convertText");
  const { hyKhHRules } = await import("data/hy/hy_kh-h.rules");

  return convertText(await ruHy(await zhRu(text)), hyKhHRules);
};
