import { Text } from "types";

export const etMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
