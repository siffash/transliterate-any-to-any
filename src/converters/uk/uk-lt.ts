import { Text } from "types";

export const ukLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnLtIaRules } = await import("data/latn/latn-lt_ia.rules");
  const { latnIaRules } = await import("data/latn/latn_ia.rules");
  const { ukLatnLtRules } = await import("data/uk/uk-latn_lt.rules");

  return convertText(
    text,
    ukLatnRules + ukLatnLtRules + latnLtIaRules + latnIaRules + latnSeparatorRules + latnLtRules,
  );
};
