import { Text } from "types";

export const elRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyphenateElPlaces } = await import("helpers/hyphenateElPlaces");
  const { elNeuterOnRules } = await import("data/el/el_neuter-on.rules");
  const { elLatnCyrlRules } = await import("data/el/el-latn_cyrl.rules");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { elRuEaRules } = await import("data/el/el-ru_ea.rules");

  return convertText(
    text,
    elNeuterOnRules + elLatnCyrlRules + elLatnRules + latnRuRules + elRuEaRules,
    { source: words => words.map(word => hyphenateElPlaces(word)) },
  );
};
