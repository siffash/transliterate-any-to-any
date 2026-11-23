import { Text } from "types";

export const fiUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");
  const { latnUkJaRules } = await import("data/latn/latn-uk_ja.rules");
  const { latnCyrlYaRules } = await import("data/latn/latn-cyrl_ya.rules");
  const { latnLongIiRules } = await import("data/latn/latn_long-ii.rules");

  return convertText(
    text,
    fiLatnRules +
      latnDiphthongIyRules +
      latnLongIiRules +
      latnUkJaRules +
      latnCyrlYaRules +
      latnUkRules,
  );
};
