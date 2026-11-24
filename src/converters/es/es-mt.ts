import { Text } from "types";

export const esMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnHiatusRules } = await import("data/latn/latn_hiatus.rules");
  const { latnMtGlideIRules } = await import("data/latn/latn-mt_glide-i.rules");
  const { latnMtGlideURules } = await import("data/latn/latn-mt_glide-u.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(
    text,
    latnHiatusRules + esLatnRules + latnMtGlideIRules + latnMtGlideURules + latnMtRules,
  );
};
