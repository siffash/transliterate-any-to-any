import { Text } from "types";

export const enMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaTsRules } = await import("data/en/en-ipa_ts.rules");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { ipaMkRules } = await import("data/ipa/ipa-mk.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(enIpaCyrlRules + enIpaTsRules + enIpaAeRules + ipaMkRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, cyrlRestoreRules);
    return copyCase(text, keepElision(ipa, transliterator), "mk");
  } else {
    const ipaArray = await enIpa<string[]>(text, cyrlRestoreRules);
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator), "mk"));
  }
};
