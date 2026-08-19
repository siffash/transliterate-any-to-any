import { Text } from "types";

export const bgId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
