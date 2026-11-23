import { Text } from "types";

export const roSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnGlideRules } = await import("data/ro/ro-latn_glide.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { roLatnSrPreRules } = await import("data/ro/ro-latn_sr-pre.rules");
  const { roLatnSrRules } = await import("data/ro/ro-latn_sr.rules");
  const { latnSrDjRules } = await import("data/latn/latn-sr_dj.rules");
  const { roLatnSrRestoreRules } = await import("data/ro/ro-latn_sr-restore.rules");

  return convertText(
    text,
    roLatnSrPreRules +
      roLatnRules +
      roLatnGlideRules +
      roLatnSrRules +
      latnSrDjRules +
      latnSrRules +
      roLatnSrRestoreRules,
  );
};
