import { Text } from "types";

export const bgFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgSchwaRules } = await import("data/bg/bg_schwa.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  return convertText(text, bgSchwaRules + bgLatnRules + latnFiRules);
};
