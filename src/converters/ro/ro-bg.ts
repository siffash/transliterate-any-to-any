import { Text } from "types";

export const roBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnSchwaRules } = await import("data/ro/ro-latn_schwa.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnGlideRules } = await import("data/ro/ro-latn_glide.rules");
  const { latnBgSchwaRules } = await import("data/latn/latn-bg_schwa.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { roCyrlEaRules } = await import("data/ro/ro-cyrl_ea.rules");

  return convertText(
    text,
    roLatnSchwaRules +
      roLatnRules +
      roLatnGlideRules +
      latnBgSchwaRules +
      latnBgRules +
      roCyrlEaRules,
  );
};
