import { Text } from "types";

export const thEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnPRules } = await import("data/th/th-latn_p.rules");
  const { thLatnKRules } = await import("data/th/th-latn_k.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { thLatnElRules } = await import("data/th/th-latn_el.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(
    text,
    thLatnRules +
      thLatnPRules +
      thLatnKRules +
      thLatnTRules +
      thLatnElRules +
      latnElRules +
      "::Title;",
    { source: thLatn },
  );
};
