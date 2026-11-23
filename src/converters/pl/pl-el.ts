import { Text } from "types";

export const plEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");
  const { plElSkieRules } = await import("data/pl/pl-el_skie.rules");

  return convertText(text, plLatnRules + latnThTRules + latnElRules + plElSkieRules);
};
