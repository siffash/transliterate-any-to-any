import { Text } from "types";

export const roUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roLatnSchwaRules } = await import("data/ro/ro-latn_schwa.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnGlideRules } = await import("data/ro/ro-latn_glide.rules");
  const { latnSchwaERules } = await import("data/latn/latn_schwa-e.rules");
  const { latnUkHRules } = await import("data/latn/latn-uk_h.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  const transliterator = RBT.fromRules(
    roLatnSchwaRules +
      roLatnRules +
      roLatnGlideRules +
      latnSchwaERules +
      latnUkHRules +
      latnUkRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
