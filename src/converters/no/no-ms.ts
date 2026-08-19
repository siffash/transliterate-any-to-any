import { Text } from "types";

export const noMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
