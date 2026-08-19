import { Text } from "types";

export const msSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("data/ms/ms-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
