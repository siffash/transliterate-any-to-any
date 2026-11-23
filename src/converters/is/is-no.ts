import { Text } from "types";

export const isNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, isLatnRules + latnNoRules);
};
