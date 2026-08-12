import { Text } from "types";

export const hiSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiLatnRules } = await import("constants/hi-latn.rules");
  const { latnSvRules } = await import("constants/latn-sv.rules");

  const transliterator = RBT.fromRules(hiLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
