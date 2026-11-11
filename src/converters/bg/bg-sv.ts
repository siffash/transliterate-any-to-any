import { Text } from "types";

export const bgSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { bgSchwaRules } = await import("data/bg/bg_schwa.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnSvDzjRules } = await import("data/latn/latn-sv_dzj.rules");

  const transliterator = RBT.fromRules(bgSchwaRules + bgLatnRules + latnSvDzjRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
