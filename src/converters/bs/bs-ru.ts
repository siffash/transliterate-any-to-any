import { Text } from "types";

export const bsRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  return convertText(text, bsLatnRules + latnRuRules);
};
