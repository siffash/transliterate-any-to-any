import { Text } from "types";

export const trUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { trLatnCyrlRules } = await import("data/tr/tr-latn_cyrl.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  const transliterator = RBT.fromRules(trLatnRules + trLatnCyrlRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
