import { Text } from "types";

export const hePt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaPtRules } = await import("data/ipa/ipa-pt.rules");

  return convertText(text, ipaPtRules + "::Title;", { source: heIpa });
};
