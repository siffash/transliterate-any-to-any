import { Text } from "types";

export const zhHy = async (text: Text) => {
  const { zhRu } = await import("converters/zh/zh-ru");
  const { ruHy } = await import("converters/ru/ru-hy");
  const { RBT } = await import("helpers/rbt");
  const { hyKhHRules } = await import("data/hy/hy_kh-h.rules");

  const transliterator = RBT.fromRules(hyKhHRules);
  const hy = await ruHy(await zhRu(text));

  if (typeof hy === "string") {
    return transliterator.transliterate(hy);
  } else {
    return hy.map(text => transliterator.transliterate(text));
  }
};
