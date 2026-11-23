import { Text } from "types";

export const roEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptRoLatnThRules } = await import("data/latn/pt_ro-latn_th.rules");
  const { itRoLatnGhRules } = await import("data/latn/it_ro-latn_gh.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, ptRoLatnThRules + itRoLatnGhRules + roLatnRules + latnEnRules);
};
