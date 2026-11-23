import { Text } from "types";

export const azEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");
  const { latnEnKhRules } = await import("data/latn/latn-en_kh.rules");

  return convertText(text, azLatnRules + latnGhGRules + latnEnKhRules + latnEnRules);
};
