import { Text } from "types";

export const ruHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnHuRules } = await import("data/ru/ru-latn_hu.rules");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");
  const { ruHuRules } = await import("data/ru/ru-hu.rules");

  return convertText(
    text,
    ruLatnHuRules + ruLatnRules + latnSeparatorRules + latnHuRules + ruHuRules,
  );
};
