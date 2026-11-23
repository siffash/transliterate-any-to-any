import { Text } from "types";

export const urVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaViRules } = await import("data/ipa/ipa-vi.rules");

  return convertText(text, ipaViRules + "::Title;", { source: urIpa });
};
