import { Text } from "types";

export const srTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
