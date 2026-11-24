import { Text } from "types";

export const mtUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnHXRules } = await import("data/latn/latn_h-x.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");

  return convertText(text, mtLatnRules + latnHXRules + latnUkRules + ukLRules);
};
