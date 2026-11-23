import { Text } from "types";

export const etRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");
  const { latnCyrlYaRules } = await import("data/latn/latn-cyrl_ya.rules");
  const { latnLongIiRules } = await import("data/latn/latn_long-ii.rules");

  return convertText(
    text,
    etLatnRules + latnDiphthongIyRules + latnLongIiRules + latnCyrlYaRules + latnRuRules,
  );
};
