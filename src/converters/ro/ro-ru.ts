import { Text } from "types";

export const roRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnSchwaRules } = await import("data/ro/ro-latn_schwa.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnGlideRules } = await import("data/ro/ro-latn_glide.rules");
  const { latnRuSchwaRules } = await import("data/latn/latn-ru_schwa.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { roCyrlEaRules } = await import("data/ro/ro-cyrl_ea.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");

  return convertText(
    text,
    roLatnSchwaRules +
      roLatnRules +
      roLatnGlideRules +
      latnDiphthongIyRules +
      latnRuSchwaRules +
      latnRuRules +
      roCyrlEaRules,
  );
};
