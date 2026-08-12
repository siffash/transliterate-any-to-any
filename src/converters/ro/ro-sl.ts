import { Text } from "types";

export const roSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("data/ro-latn.rules");
  const { latnSlRules } = await import("data/latn-sl.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
