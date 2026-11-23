import { Text } from "types";

export const ltUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { ltLatnPalatalRules } = await import("data/lt/lt-latn_palatal.rules");
  const { ltLatnIeRules } = await import("data/lt/lt-latn_ie.rules");
  const { ltCyrlUkRules } = await import("data/lt/lt-cyrl_uk.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  return convertText(
    text,
    ltLatnRules + ltLatnPalatalRules + ltLatnIeRules + latnUkRules + ltCyrlUkRules,
  );
};
