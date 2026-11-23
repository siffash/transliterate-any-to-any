import { Text } from "types";

export const deEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, deLatnRules + latnEtRules);
};
