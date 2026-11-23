import { Text } from "types";

export const hrRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  return convertText(text, hrLatnRules + latnRuRules);
};
