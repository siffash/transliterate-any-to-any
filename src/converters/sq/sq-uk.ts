import { Text } from "types";

export const sqUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnFinalERules } = await import("data/sq/sq-latn_final-e.rules");
  const { sqLatnLRules } = await import("data/sq/sq-latn_l.rules");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { sqLatnDhRules } = await import("data/sq/sq-latn_dh.rules");
  const { latnUkHiatusRules } = await import("data/latn/latn-uk_hiatus.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  return convertText(
    text,
    sqLatnFinalERules +
      sqLatnLRules +
      sqLatnRules +
      sqLatnDhRules +
      latnUkHiatusRules +
      latnUkRules,
  );
};
