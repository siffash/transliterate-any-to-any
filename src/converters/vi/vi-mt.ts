import { Text } from "types";

export const viMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnMtGlideIRules } = await import("data/latn/latn-mt_glide-i.rules");
  const { latnMtGlideURules } = await import("data/latn/latn-mt_glide-u.rules");
  const { latnMtAoRules } = await import("data/latn/latn-mt_ao.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(
    text,
    viLatnRules + latnMtAoRules + latnMtGlideIRules + latnMtGlideURules + latnMtRules,
  );
};
