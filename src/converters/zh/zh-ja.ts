import { Text } from "types";

export const zhJa = async (text: Text) => {
  const { OpenCC } = await import("opencc");

  const s2t = new OpenCC("s2t.json");
  const t2jp = new OpenCC("t2jp.json");

  const convert = async (text: string) => {
    const traditional = await s2t.convertPromise(text);
    return await t2jp.convertPromise(traditional);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
