import { Text } from "types";

export const huLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnVvRules } = await import("data/latn/latn_vv.rules");
  const { latnLtOeRules } = await import("data/latn/latn-lt_oe.rules");
  const { huLatnLtRules } = await import("data/hu/hu-latn_lt.rules");

  return convertText(
    text,
    huLatnLtRules +
      huLatnRules +
      huLatnYRules +
      huLatnGyRules +
      latnLtOeRules +
      latnLtRules +
      latnVvRules,
  );
};
