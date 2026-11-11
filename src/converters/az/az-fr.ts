import { Text } from "types";

export const azFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { azLatnARules } = await import("data/az/az-latn_a.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(
    azLatnRules + azLatnARules + latnGhGRules + latnIRules + latnFrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
