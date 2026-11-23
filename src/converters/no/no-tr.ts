import { Text } from "types";

export const noTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(text, noLatnRules + latnTrRules);
};
