import { Text } from "types";

export const srVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnViRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
