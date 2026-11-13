import { Text } from "types";

export const caAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { caLatnAyRules } = await import("data/ca/ca-latn_ay.rules");
  const { latnAzLyeRules } = await import("data/latn/latn-az_lye.rules");

  const transliterator = RBT.fromRules(caLatnAyRules + caLatnRules + latnAzLyeRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
