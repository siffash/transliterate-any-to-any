import { Text } from "types";

export const sqSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, sqLatnRules + latnSkRules);
};
