import { Text } from "types";

export const etIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, etLatnRules + latnThTRules + latnIsRules);
};
