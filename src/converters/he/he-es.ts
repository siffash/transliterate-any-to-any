import { Text } from "types";

export const heEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaEsRules } = await import("data/ipa/ipa-es.rules");

  return convertText(text, ipaEsRules + "::Title;", { source: heIpa });
};
