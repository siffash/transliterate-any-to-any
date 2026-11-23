import { Text } from "types";

export const svMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, svLatnRules + latnMsRules);
};
