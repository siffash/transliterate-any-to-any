import { Text } from "types";

export const enBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { enIpaBgRules } = await import("data/en/en-ipa_bg.rules");
  const { ipaBgRules } = await import("data/ipa/ipa-bg.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");
  const { bgRestoreRules, erRestoreRules, mouthRestoreRules, boroughRestoreRules } =
    await import("helpers/normalizeEnIpa");

  const transliterator = RBT.fromRules(enIpaBgRules + ipaBgRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words, bgRestoreRules, [
    ...erRestoreRules,
    ...mouthRestoreRules,
    ...boroughRestoreRules,
  ]);
  const result = ipa.map((ipa, i) => copyCase(words[i], keepElision(ipa, transliterator), "bg"));
  return typeof text === "string" ? result[0] : result;
};
