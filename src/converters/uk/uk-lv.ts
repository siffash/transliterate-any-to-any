import { Text } from "types";

export const ukLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { ukLatnLvRules } = await import("data/uk/uk-latn_lv.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnCyCRules } = await import("data/latn/latn_cy-c.rules");
  const { ukLatnLvLlRules } = await import("data/uk/uk-latn_lv-ll.rules");

  return convertText(
    text,
    ukLatnRules + latnSeparatorRules + latnCyCRules + ukLatnLvRules + latnLvRules + ukLatnLvLlRules,
  );
};
