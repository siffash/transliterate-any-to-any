import { Text } from "types";

export const ptMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnHiatusRules } = await import("data/latn/latn_hiatus.rules");
  const { ptLatnOuRules } = await import("data/pt/pt-latn_ou.rules");
  const { latnMtGlideIRules } = await import("data/latn/latn-mt_glide-i.rules");
  const { latnMtGlideURules } = await import("data/latn/latn-mt_glide-u.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");
  const { ptLatnSRules } = await import("data/pt/pt-latn_s.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");

  return convertText(
    text,
    latnHiatusRules +
      ptLatnSRules +
      ptLatnRules +
      latnHoldRestoreRules +
      ptLatnOuRules +
      latnMtGlideIRules +
      latnMtGlideURules +
      latnMtRules,
  );
};
