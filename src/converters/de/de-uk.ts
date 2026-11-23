import { Text } from "types";

export const deUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ukLlRules } = await import("data/uk/uk_ll.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");
  const { deLatnUkRules } = await import("data/de/de-latn_uk.rules");

  return convertText(text, deLatnRules + latnUkRules + ukLlRules + ukLRules + deLatnUkRules);
};
