import { Text } from "types";

export const enUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaTsRules } = await import("data/en/en-ipa_ts.rules");
  const { enIpaUkRules } = await import("data/en/en-ipa_uk.rules");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(
    enIpaCyrlRules + enIpaTsRules + enIpaUkRules + enIpaAeRules + ipaUkRules,
  );

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, cyrlRestoreRules);
    return copyCase(text, keepElision(ipa, transliterator), "uk");
  } else {
    const ipaArray = await enIpa<string[]>(text, cyrlRestoreRules);
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator), "uk"));
  }
};
