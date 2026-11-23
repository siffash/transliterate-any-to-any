import { Text } from "types";

export const ltRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { ltLatnPalatalRules } = await import("data/lt/lt-latn_palatal.rules");
  const { ltLatnIeRules } = await import("data/lt/lt-latn_ie.rules");
  const { ltCyrlRuRules } = await import("data/lt/lt-cyrl_ru.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  return convertText(
    text,
    ltLatnRules + ltLatnPalatalRules + ltLatnIeRules + latnRuRules + ltCyrlRuRules,
  );
};
