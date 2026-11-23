import { Text } from "types";

export const bgSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgSchwaERules } = await import("data/bg/bg_schwa-e.rules");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, bgSchwaERules + bgLatnRules + latnSqRules);
};
