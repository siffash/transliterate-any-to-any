import { Text } from "types";

export const plEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, plLatnRules + latnEtRules);
};
