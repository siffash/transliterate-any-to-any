import { Text } from "types";

export const heNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { heIpa } = await import("converters/he/he-ipa");
  const { ipaNoRules } = await import("data/ipa/ipa-no.rules");

  return convertText(text, ipaNoRules + "::Title;", { source: heIpa });
};
