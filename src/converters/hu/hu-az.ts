import { Text } from "types";

export const huAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { huLatnAzRules } = await import("data/hu/hu-latn_az.rules");

  return convertText(
    text,
    huLatnAzRules + huLatnRules + huLatnYRules + huLatnGyRules + latnAzRules,
  );
};
