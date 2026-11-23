import { Text } from "types";

export const fiEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, fiLatnRules + latnEtRules);
};
