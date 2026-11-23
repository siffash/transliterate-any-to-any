import { Text } from "types";

export const heMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaMsRules } = await import("data/ipa/ipa-ms.rules");

  return convertText(text, ipaMsRules + "::Title;", { source: heIpa });
};
