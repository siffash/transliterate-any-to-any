import { Text } from "types";

export const bgNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, bgLatnRules + latnNoRules);
};
