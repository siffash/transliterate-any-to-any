import { Text } from "types";

export const idRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  return convertText(text, msIdLatnRules + latnRuRules);
};
