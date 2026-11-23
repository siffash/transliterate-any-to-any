import { Text } from "types";

export const isRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnURules } = await import("data/is/is-latn_u.rules");
  const { isLatnDlRules } = await import("data/is/is-latn_dl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLlRules } = await import("data/ru/ru_ll.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");

  return convertText(
    text,
    isLatnDlRules + isLatnURules + isLatnRules + latnRuRules + ruLlRules + ruLRules,
  );
};
