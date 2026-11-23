import { Text } from "types";

export const isUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnURules } = await import("data/is/is-latn_u.rules");
  const { isLatnTlRules } = await import("data/is/is-latn_tl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ukLlRules } = await import("data/uk/uk_ll.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");

  return convertText(
    text,
    isLatnTlRules + isLatnURules + isLatnRules + latnUkRules + ukLlRules + ukLRules,
  );
};
