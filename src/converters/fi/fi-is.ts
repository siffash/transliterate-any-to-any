import { Text } from "types";

export const fiIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, fiLatnRules + latnThTRules + latnIsRules);
};
