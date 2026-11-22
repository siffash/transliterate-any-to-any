import { Text } from "types";

export const esJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaJaWRules } = await import("data/ipa/ipa-ja_w.rules");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { esIpaJaRules } = await import("data/es/es-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { esHuaRules } = await import("data/es/es_hua.rules");

  const transliterator = RBT.fromRules(
    esHuaRules + esIpaRules + esIpaJaRules + ipaJaWRules + ipaJaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
