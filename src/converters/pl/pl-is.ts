import { Text } from "types";

export const plIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, plLatnRules + latnThTRules + latnIsRules);
};
