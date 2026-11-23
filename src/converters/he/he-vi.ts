import { Text } from "types";

export const heVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaViRules } = await import("data/ipa/ipa-vi.rules");

  return convertText(text, ipaViRules + "::Title;", { source: heIpa });
};
