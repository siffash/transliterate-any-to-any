import { Text } from "types";

export const sqId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, sqLatnRules + latnIdRules);
};
