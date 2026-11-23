import { Text } from "types";

export const roAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnSchwaRules } = await import("data/ro/ro-latn_schwa.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnGlideRules } = await import("data/ro/ro-latn_glide.rules");
  const { latnSchwaERules } = await import("data/latn/latn_schwa-e.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnHXRules } = await import("data/latn/latn_h-x.rules");

  return convertText(
    text,
    roLatnSchwaRules + roLatnRules + roLatnGlideRules + latnSchwaERules + latnHXRules + latnAzRules,
  );
};
