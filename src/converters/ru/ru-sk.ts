import { Text } from "types";

export const ruSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnSkRules } = await import("data/ru/ru-latn_sk.rules");
  const { ruLatnCsskRules } = await import("data/ru/ru-latn_cssk.rules");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");
  const { latnKsXRules } = await import("data/latn/latn_ks-x.rules");

  const transliterator = RBT.fromRules(
    ruLatnSkRules + ruLatnCsskRules + ruLatnRules + latnSeparatorRules + latnSkRules + latnKsXRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
