import { Text } from "types";

export const noRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLlRules } = await import("data/ru/ru_ll.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");
  const { noCyrlRuRules } = await import("data/no/no-cyrl_ru.rules");

  return convertText(
    text,
    noLatnRules + latnSilentHRules + latnRuRules + ruLlRules + ruLRules + noCyrlRuRules,
  );
};
