import { Text } from "types";

export const roTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnSchwaRules } = await import("data/ro/ro-latn_schwa.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnGlideRules } = await import("data/ro/ro-latn_glide.rules");
  const { latnRuSchwaRules } = await import("data/latn/latn-ru_schwa.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { roCyrlEaRules } = await import("data/ro/ro-cyrl_ea.rules");
  const { latnHXRules } = await import("data/latn/latn_h-x.rules");

  return convertText(
    text,
    roLatnSchwaRules +
      roLatnRules +
      roLatnGlideRules +
      latnRuSchwaRules +
      latnHXRules +
      latnTgRules +
      roCyrlEaRules,
  );
};
