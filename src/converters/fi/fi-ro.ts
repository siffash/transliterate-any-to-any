import { Text } from "types";

export const fiRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  return convertText(text, fiLatnRules + latnRoRules);
};
