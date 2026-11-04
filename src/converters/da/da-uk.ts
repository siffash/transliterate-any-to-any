import { Text } from "types";

export const daUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ukLlRules } = await import("data/uk/uk_ll.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");

  const transliterator = RBT.fromRules(
    daLatnRules + latnSilentHRules + latnUkRules + ukLlRules + ukLRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
