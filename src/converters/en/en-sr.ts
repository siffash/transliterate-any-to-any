import { Text } from "types";

export const enSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaTsRules } = await import("data/en/en-ipa_ts.rules");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaCyrlRules + enIpaTsRules + ipaSrRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, cyrlRestoreRules);
    return copyCase(text, transliterator.transliterate(ipa), "sr");
  } else {
    const ipaArray = await enIpa<string[]>(text, cyrlRestoreRules);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "sr"));
  }
};
