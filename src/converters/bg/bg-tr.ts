import { Text } from "types";

export const bgTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgSchwaYRules } = await import("data/bg/bg_schwa-y.rules");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(text, bgSchwaYRules + bgLatnRules + latnTrRules);
};
