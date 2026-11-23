import { Text } from "types";

export const heSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");

  return convertText(text, ipaSkRules + "::Title;", { source: heIpa });
};
