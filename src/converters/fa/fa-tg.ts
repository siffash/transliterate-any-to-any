import { Text } from "types";

export const faTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { ipaUvularQRules } = await import("data/ipa/ipa_uvular-q.rules");
  const { faIpaTgRules } = await import("data/fa/fa-ipa_tg.rules");
  const { arFaUrIpaTgRules } = await import("data/ipa/ar_fa_ur-ipa_tg.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");
  const { faTgRules } = await import("data/fa/fa-tg.rules");
  const { faTgLowerRules } = await import("data/fa/fa-tg_lower.rules");

  return convertText(
    text,
    ipaUvularQRules +
      faIpaTgRules +
      arFaUrIpaTgRules +
      ipaTgRules +
      faTgRules +
      "::Title;" +
      faLowerRules +
      faTgLowerRules,
    { source: words => faIpaUvular(words, "·") },
  );
};
