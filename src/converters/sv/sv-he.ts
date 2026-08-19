import { Text } from "types";

export const svHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(svIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
