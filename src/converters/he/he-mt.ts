import { Text } from "types";

export const heMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaMtGlottalRules } = await import("data/ipa/ipa-mt_glottal.rules");
  const { ipaMtRules } = await import("data/ipa/ipa-mt.rules");

  return convertText(text, ipaMtGlottalRules + ipaMtRules + "::Title;", { source: heIpa });
};
