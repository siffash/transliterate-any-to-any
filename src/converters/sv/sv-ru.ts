import { Text } from "types";

export const svRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLlRules } = await import("data/ru/ru_ll.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");
  const { svLatnCyrlYuRules } = await import("data/sv/sv-latn_cyrl-yu.rules");

  return convertText(
    text,
    svLatnRules + svLatnCyrlYuRules + latnSilentHRules + latnRuRules + ruLlRules + ruLRules,
  );
};
