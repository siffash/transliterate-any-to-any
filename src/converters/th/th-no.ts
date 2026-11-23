import { Text } from "types";

export const thNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + latnIRules + latnNoRules + "::Title;", { source: thLatn });
};
