import { Text } from "types";

export const sqNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, sqLatnRules + latnNoRules);
};
