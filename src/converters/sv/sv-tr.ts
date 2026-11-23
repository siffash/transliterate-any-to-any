import { Text } from "types";

export const svTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(text, svLatnRules + latnTrRules);
};
