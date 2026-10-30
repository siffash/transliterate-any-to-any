import { Text } from "types";

export const ruCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnCsskRules } = await import("data/ru/ru-latn_cssk.rules");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  const transliterator = RBT.fromRules(
    ruLatnCsskRules + ruLatnRules + latnSeparatorRules + latnCsRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
