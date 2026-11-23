import { Text } from "types";

export const faTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faLowerRules } = await import("data/fa/fa_lower.rules");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { ipaUvularQRules } = await import("data/ipa/ipa_uvular-q.rules");
  const { faIpaTgNamesRules } = await import("data/fa/fa-ipa_tg-names.rules");
  const { faIpaTgRules } = await import("data/fa/fa-ipa_tg.rules");
  const { arFaUrIpaTgRules } = await import("data/ipa/ar_fa_ur-ipa_tg.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");
  const { faTgRules } = await import("data/fa/fa-tg.rules");
  const { faTgLowerRules } = await import("data/fa/fa-tg_lower.rules");

  const transliterator = RBT.fromRules(
    ipaUvularQRules +
      faIpaTgNamesRules +
      faIpaTgRules +
      arFaUrIpaTgRules +
      ipaTgRules +
      faTgRules +
      "::Title;" +
      faLowerRules +
      faTgLowerRules,
  );

  if (typeof text === "string") {
    const ipa = await faIpaUvular<string>(text, "·");
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpaUvular<string[]>(text, "·");
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
