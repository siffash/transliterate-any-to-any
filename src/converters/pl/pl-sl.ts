import { Text } from "types";

export const plSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plLatnRules } = await import("constants/pl-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
