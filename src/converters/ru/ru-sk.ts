import { Text } from "types";

export const ruSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnCsskRules } = await import("data/ru/ru-latn_cssk.rules");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { ruLatnSeparatorRules } = await import("data/ru/ru-latn_separator.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  const transliterator = RBT.fromRules(
    ruLatnCsskRules + ruLatnRules + ruLatnSeparatorRules + latnSkRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
