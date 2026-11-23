import { Text } from "types";

export const hyRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { hyLatnGhRules } = await import("data/hy/hy-latn_gh.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { hyLatnRuRules } = await import("data/hy/hy-latn_ru.rules");

  return convertText(text, hyLatnRules + hyLatnGhRules + latnRuRules + hyLatnRuRules);
};
