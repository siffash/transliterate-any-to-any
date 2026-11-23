import { Text } from "types";

export const itEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, itLatnRules + latnEtRules);
};
