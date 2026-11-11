import { Text } from "types";

export const roFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptRoLatnThRules } = await import("data/latn/pt_ro-latn_th.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(ptRoLatnThRules + roLatnRules + latnIRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
