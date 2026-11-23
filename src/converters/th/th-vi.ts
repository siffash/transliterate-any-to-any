import { Text } from "types";

export const thVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + latnViRules + "::Title;", { source: thLatn });
};
