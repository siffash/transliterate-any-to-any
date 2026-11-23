import { Text } from "types";

export const roUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnSchwaRules } = await import("data/ro/ro-latn_schwa.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnGlideRules } = await import("data/ro/ro-latn_glide.rules");
  const { latnSchwaERules } = await import("data/latn/latn_schwa-e.rules");
  const { latnUkHRules } = await import("data/latn/latn-uk_h.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { roCyrlEaRules } = await import("data/ro/ro-cyrl_ea.rules");
  const { roCyrlFinalIRules } = await import("data/ro/ro-cyrl_final-i.rules");
  const { latnDiphthongIyRules } = await import("data/latn/latn_diphthong-iy.rules");

  return convertText(
    text,
    roLatnSchwaRules +
      roLatnRules +
      roLatnGlideRules +
      latnDiphthongIyRules +
      latnSchwaERules +
      latnUkHRules +
      latnUkRules +
      roCyrlEaRules +
      roCyrlFinalIRules,
  );
};
