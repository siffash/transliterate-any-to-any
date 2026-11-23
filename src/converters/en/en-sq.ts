import { Text } from "types";

export const enSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaSqRules } = await import("data/ipa/ipa-sq.rules");
  const { enIpaSqRules } = await import("data/en/en-ipa_sq.rules");
  const { enIpaARules } = await import("data/en/en-ipa_a.rules");

  return convertText(text, enIpaSqRules + enIpaARules + ipaSqRules, {
    source: enIpa,
    caseLang: "sq",
  });
};
