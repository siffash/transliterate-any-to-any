import { Text } from "types";

export const roLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { roLatnVjvRules } = await import("data/ro/ro-latn_vjv.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { roLatnLtRules } = await import("data/ro/ro-latn_lt.rules");
  const { roLatnIiRules } = await import("data/ro/ro-latn_ii.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(
    text,
    roLatnLtRules + roLatnIiRules + roLatnRules + roLatnVjvRules + latnIRules + latnLtRules,
  );
};
