import { Text } from "types";

export const zhJa = async (text: Text) => {
  const OpenCC = await import("opencc-js");

  const s2jp = OpenCC.Converter({ from: "cn", to: "jp" });

  if (typeof text === "string") {
    return s2jp(text);
  } else {
    return text.map(s2jp);
  }
};
