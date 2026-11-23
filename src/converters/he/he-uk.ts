import { Text } from "types";

export const heUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");

  return convertText(text, ipaUkRules + ukLRules + "::Title;", { source: heIpa });
};
