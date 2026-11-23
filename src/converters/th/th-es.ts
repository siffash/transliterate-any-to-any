import { Text } from "types";

export const thEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnPRules } = await import("data/th/th-latn_p.rules");
  const { thLatnKRules } = await import("data/th/th-latn_k.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(
    text,
    thLatnRules +
      thLatnPRules +
      thLatnKRules +
      thLatnTRules +
      latnIRules +
      latnEsRules +
      "::Title;",
    { source: thLatn },
  );
};
