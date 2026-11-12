import { Text } from "types";

export const hySv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnDzjRules + latnGGhRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
