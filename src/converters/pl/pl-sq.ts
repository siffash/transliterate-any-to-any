import { Text } from "types";

export const plSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, plLatnRules + latnIRules + latnThTRules + latnSqRules);
};
