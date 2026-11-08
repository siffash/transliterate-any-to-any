import { Text } from "types";

export const roBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roLatnSchwaRules } = await import("data/ro/ro-latn_schwa.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnGlideRules } = await import("data/ro/ro-latn_glide.rules");
  const { latnBgSchwaRules } = await import("data/latn/latn-bg_schwa.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  const transliterator = RBT.fromRules(
    roLatnSchwaRules + roLatnRules + roLatnGlideRules + latnBgSchwaRules + latnBgRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
