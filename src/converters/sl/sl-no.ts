import { Text } from "types";

export const slNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
