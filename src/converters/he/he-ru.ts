import { Text } from "types";

export const heRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");

  return convertText(text, ipaRuRules + ruLRules + "::Title;", { source: heIpa });
};
