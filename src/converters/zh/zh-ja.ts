import { Text } from "types";

export const zhJa = async (text: Text) => {
  const OpenCC = await import("opencc-js");

  const s2jp = OpenCC.Converter({ from: "cn", to: "jp" });

  const convert = (text: string) => {
    return s2jp(text);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
