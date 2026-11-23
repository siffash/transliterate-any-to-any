import { Text } from "types";

export const lbUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnUkHiatusRules } = await import("data/latn/latn-uk_hiatus.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ukLlRules } = await import("data/uk/uk_ll.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");

  return convertText(
    text,
    latnSilentHRules + latnUkHiatusRules + latnUkRules + ukLlRules + ukLRules,
    { source: lbLatn },
  );
};
