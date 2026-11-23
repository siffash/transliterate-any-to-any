import { Text } from "types";

export const nlEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnGhGRules } = await import("data/latn/latn_gh-g.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");
  const { latnEnKhRules } = await import("data/latn/latn-en_kh.rules");

  return convertText(text, nlLatnRules + latnGhGRules + latnEnKhRules + latnEnRules);
};
