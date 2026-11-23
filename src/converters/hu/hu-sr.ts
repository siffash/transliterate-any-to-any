import { Text } from "types";

export const huSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnSrRules } = await import("data/hu/hu-latn_sr.rules");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(
    text,
    huLatnSrRules + huLatnRules + huLatnYRules + huLatnGyRules + latnSrRules,
  );
};
