import { Text } from "types";

export const enHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLRestoreRules,
    geminateRestoreRules,
    geminateSingleRestoreRules,
    airRestoreRules,
    shireRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { enIpaHyRules } = await import("data/en/en-ipa_hy.rules");
  const { copyCase } = await import("helpers/copyCase");
  const { keepElision } = await import("helpers/keepElision");

  const transliterator = RBT.fromRules(enIpaHyRules + ipaHyRules + hyEvRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(
    words,
    [
      ...syllabicLRestoreRules,
      ...geminateSingleRestoreRules,
      ...airRestoreRules,
      ...shireRestoreRules,
    ],
    geminateRestoreRules,
  );
  const result = ipa.map((ipa, i) =>
    copyCase(words[i], keepElision(ipa, transliterator, "'"), "hy"),
  );
  return typeof text === "string" ? result[0] : result;
};
