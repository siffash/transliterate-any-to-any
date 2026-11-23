import { Text } from "types";

export const ruNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIjRules } = await import("data/latn/latn_ij.rules");
  const { latnOuHiatusRules } = await import("data/latn/latn_ou-hiatus.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  return convertText(
    text,
    ruLatnRules + latnSeparatorRules + latnIjRules + latnOuHiatusRules + latnDzjRules + latnNlRules,
  );
};
