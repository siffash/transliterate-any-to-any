import { Text } from "types";

export const enRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { cyrlRestoreRules, erRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaCyrlRules } = await import("data/en/en-ipa_cyrl.rules");
  const { enIpaWURules } = await import("data/en/en-ipa_w-u.rules");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { enIpaRuRules } = await import("data/en/en-ipa_ru.rules");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(
    enIpaCyrlRules + enIpaWURules + enIpaAeRules + enIpaRuRules + ipaRuRules,
  );

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, cyrlRestoreRules, erRestoreRules);
    return copyCase(text, keepElision(ipa, transliterator), "ru");
  } else {
    const ipaArray = await enIpa<string[]>(text, cyrlRestoreRules, erRestoreRules);
    return ipaArray.map((ipa, i) => copyCase(text[i], keepElision(ipa, transliterator), "ru"));
  }
};
