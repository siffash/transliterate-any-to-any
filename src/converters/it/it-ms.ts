import { Text } from "types";

export const itMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { itLatnRules } = await import("data/it-latn.rules");
  const { latnMsRules } = await import("data/latn-ms.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
