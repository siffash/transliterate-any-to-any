import { Text } from "types";

export const msId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdRules } = await import("data/ms/ms-id.rules");

  return convertText(text, msIdRules);
};
