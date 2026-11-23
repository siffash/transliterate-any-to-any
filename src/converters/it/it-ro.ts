import { Text } from "types";

export const itRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnRoRules } = await import("data/it/it-latn_ro.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoKRules } = await import("data/latn/latn-ro_k.rules");

  return convertText(text, itLatnRules + itLatnRoRules + latnRoRules + latnRoKRules);
};
