import { Text } from "types";

export const ptFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptRoLatnThRules } = await import("data/latn/pt_ro-latn_th.rules");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  const transliterator = RBT.fromRules(ptRoLatnThRules + ptLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
