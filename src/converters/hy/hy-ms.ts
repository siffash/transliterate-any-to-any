import { Text } from "types";

export const hyMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, hyLatnRules + latnMsRules);
};
