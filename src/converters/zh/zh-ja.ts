import { Text } from "types";

export const zhJa = async (text: Text) => {
  const OpenCC = await import("opencc-js");
  const { ZH_JA_ETHNONYMS } = await import("data/zh/zh-ethnonyms.map");

  const s2jp = OpenCC.Converter({ from: "cn", to: "jp" });
  const ethnonym = new RegExp(`(${Object.keys(ZH_JA_ETHNONYMS).join("|")})(?=族)`, "g");

  const convert = (text: string) =>
    s2jp(text.replace(ethnonym, name => ZH_JA_ETHNONYMS[name]!).replaceAll("于", "\uE000"))
      .replaceAll("\uE000", "于")
      .replaceAll("莱", "萊")
      .replaceAll("舗", "鋪");

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
