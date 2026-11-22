import { Text } from "types";

export const bnTh = async (text: Text) => {
  const { bnHi } = await import("converters/bn/bn-hi");
  const { hiTh } = await import("converters/hi/hi-th");

  return hiTh(await bnHi(text));
};
