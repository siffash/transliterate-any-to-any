import { Text } from "types";

export const daMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");
  const { latnMkVvRules } = await import("data/latn/latn-mk_vv.rules");

  return convertText(text, daLatnRules + latnSilentHRules + latnMkRules + latnMkVvRules);
};
