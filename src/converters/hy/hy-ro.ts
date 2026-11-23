import { Text } from "types";

export const hyRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoARules } = await import("data/latn/latn-ro_a.rules");
  const { latnGhHRules } = await import("data/latn/latn_gh-h.rules");

  return convertText(text, hyLatnRules + latnGhHRules + latnDzRules + latnRoRules + latnRoARules);
};
