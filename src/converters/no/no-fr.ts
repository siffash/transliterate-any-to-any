import { Text } from "types";

export const noFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, noLatnRules + latnFrRules);
};
