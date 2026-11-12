import { Text } from "types";

export const bgRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgSchwaRules } = await import("data/bg/bg_schwa.rules");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnIyIiRules } = await import("data/latn/latn_iy-ii.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  const transliterator = RBT.fromRules(
    bgSchwaRules + bgLatnRules + latnIyIiRules + latnDzRules + latnRoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
