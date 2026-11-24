import { Text } from "types";

export const thMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnKRules } = await import("data/th/th-latn_k.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnMtGlideIRules } = await import("data/latn/latn-mt_glide-i.rules");
  const { latnMtGlideURules } = await import("data/latn/latn-mt_glide-u.rules");
  const { latnMtAoRules } = await import("data/latn/latn-mt_ao.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(
    text,
    thLatnRules +
      thLatnKRules +
      thLatnTRules +
      latnMtAoRules +
      latnMtGlideIRules +
      latnMtGlideURules +
      latnMtRules +
      "::Title;",
    {
      source: thLatn,
    },
  );
};
