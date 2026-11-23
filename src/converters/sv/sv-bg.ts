import { Text } from "types";

export const svBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { svLatnCyrlYuRules } = await import("data/sv/sv-latn_cyrl-yu.rules");
  const { svLatnShRules } = await import("data/sv/sv-latn_sh.rules");

  return convertText(
    text,
    svLatnRules + svLatnShRules + svLatnCyrlYuRules + latnSilentHRules + latnBgRules,
  );
};
