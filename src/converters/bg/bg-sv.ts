import { Text } from "types";

export const bgSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgSchwaRules } = await import("data/bg/bg_schwa.rules");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  const transliterator = RBT.fromRules(bgSchwaRules + bgLatnRules + latnDzjRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
