import { Text } from "types";

export const roHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnSchwaRules } = await import("data/ro/ro-latn_schwa.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnGlideRules } = await import("data/ro/ro-latn_glide.rules");
  const { latnSchwaERules } = await import("data/latn/latn_schwa-e.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(
    text,
    roLatnSchwaRules + roLatnRules + roLatnGlideRules + latnSchwaERules + latnHyRules + hyEvRules,
  );
};
