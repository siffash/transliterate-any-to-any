import { Text } from "types";

export const faTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpaUvular } = await import("converters/fa/fa-ipa");
  const { faIpaUvularQRules } = await import("data/fa/fa-ipa_uvular-q.rules");
  const { faIpaTgRules } = await import("data/fa/fa-ipa_tg.rules");
  const { arFaUrIpaTgRules } = await import("data/ipa/ar_fa_ur-ipa_tg.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  const transliterator = RBT.fromRules(
    faIpaUvularQRules + faIpaTgRules + arFaUrIpaTgRules + ipaTgRules + "::Title;",
  );

  if (typeof text === "string") {
    const ipa = await faIpaUvular<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpaUvular<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
