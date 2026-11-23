import { Text } from "types";

export const fiRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLlRules } = await import("data/ru/ru_ll.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");
  const { fiCyrlLRules } = await import("data/fi/fi-cyrl_l.rules");
  const { latnCyrlYaRules } = await import("data/latn/latn-cyrl_ya.rules");
  const { latnLongIiRules } = await import("data/latn/latn_long-ii.rules");

  return convertText(
    text,
    fiLatnRules +
      latnDiphthongIyRules +
      latnLongIiRules +
      latnCyrlYaRules +
      latnRuRules +
      fiCyrlLRules +
      ruLlRules,
  );
};
