import { Text } from "types";

export const elRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyphenateElPlaces } = await import("helpers/hyphenateElPlaces");
  const { elNeuterOnRules } = await import("data/el/el_neuter-on.rules");
  const { elLatnCyrlRules } = await import("data/el/el-latn_cyrl.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { elRuEaRules } = await import("data/el/el-ru_ea.rules");

  const transliterator = RBT.fromRules(
    elNeuterOnRules + elLatnCyrlRules + elLatnRules + latnRuRules + elRuEaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(hyphenateElPlaces(text));
  } else {
    return text.map(text => transliterator.transliterate(hyphenateElPlaces(text)));
  }
};
