import { Text } from "types";

export const roEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptRoLatnThRules } = await import("data/latn/pt_ro-latn_th.rules");
  const { itRoLatnGhRules } = await import("data/latn/it_ro-latn_gh.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  const transliterator = RBT.fromRules(
    ptRoLatnThRules + itRoLatnGhRules + roLatnRules + latnEnRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
