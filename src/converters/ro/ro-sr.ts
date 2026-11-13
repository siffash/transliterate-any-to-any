import { Text } from "types";

export const roSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnGlideRules } = await import("data/ro/ro-latn_glide.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { roLatnSrPreRules } = await import("data/ro/ro-latn_sr-pre.rules");
  const { roLatnSrRules } = await import("data/ro/ro-latn_sr.rules");
  const { latnSrDjRules } = await import("data/latn/latn-sr_dj.rules");
  const { roLatnSrRestoreRules } = await import("data/ro/ro-latn_sr-restore.rules");

  const transliterator = RBT.fromRules(
    roLatnSrPreRules +
      roLatnRules +
      roLatnGlideRules +
      roLatnSrRules +
      latnSrDjRules +
      latnSrRules +
      roLatnSrRestoreRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
