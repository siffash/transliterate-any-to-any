import { Text } from "types";

export const itUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYeRules } = await import("data/it/it-latn_ye.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");

  const transliterator = RBT.fromRules(itLatnRules + itLatnYeRules + latnUkRules + ukLRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
