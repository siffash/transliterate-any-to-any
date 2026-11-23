import { Text } from "types";

export const ruHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { ruHyVowelsRules } = await import("data/ru/ru-hy_vowels.rules");

  return convertText(
    text,
    ruLatnRules + latnSeparatorRules + latnHyRules + hyEvRules + ruHyVowelsRules,
  );
};
