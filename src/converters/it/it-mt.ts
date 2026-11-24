import { Text } from "types";

export const itMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnQuWRules } = await import("data/it/it-latn_qu-w.rules");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnMtGlideIRules } = await import("data/latn/latn-mt_glide-i.rules");
  const { latnMtGlideURules } = await import("data/latn/latn-mt_glide-u.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(
    text,
    itLatnQuWRules + itLatnRules + latnMtGlideIRules + latnMtGlideURules + latnMtRules,
  );
};
