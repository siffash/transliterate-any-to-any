import { Text } from "types";

export const deFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, deLatnRules + latnFrRules);
};
