import { Text } from "types";

export const idMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { idMsRules } = await import("data/id/id-ms.rules");

  return convertText(text, idMsRules);
};
