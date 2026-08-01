import { Text } from "types";

export const msUk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { msLatnRules } = await import("constants/ms-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
