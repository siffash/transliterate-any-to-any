import { Text } from "types";

export const roKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roLatnSchwaRules } = await import("data/ro/ro-latn_schwa.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnSchwaERules } = await import("data/latn/latn_schwa-e.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  const transliterator = RBT.fromRules(
    roLatnSchwaRules + roLatnRules + latnSchwaERules + latnKaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
