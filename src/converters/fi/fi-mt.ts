import { Text } from "types";

export const fiMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnMtGlideIRules } = await import("data/latn/latn-mt_glide-i.rules");
  const { latnMtGlideURules } = await import("data/latn/latn-mt_glide-u.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(text, fiLatnRules + latnMtGlideIRules + latnMtGlideURules + latnMtRules);
};
