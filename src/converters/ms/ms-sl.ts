import { Text } from "types";

export const msSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("constants/ms-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
