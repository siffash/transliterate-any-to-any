import { Text } from "types";

export const svUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ukLlRules } = await import("data/uk/uk_ll.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");
  const { svLatnCyrlYuRules } = await import("data/sv/sv-latn_cyrl-yu.rules");

  return convertText(
    text,
    svLatnRules + svLatnCyrlYuRules + latnSilentHRules + latnUkRules + ukLlRules + ukLRules,
  );
};
