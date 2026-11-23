import { Text } from "types";

export const thFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnKRules } = await import("data/th/th-latn_k.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(
    text,
    thLatnRules + thLatnKRules + thLatnTRules + latnIRules + latnFiRules + "::Title;",
    { source: thLatn },
  );
};
