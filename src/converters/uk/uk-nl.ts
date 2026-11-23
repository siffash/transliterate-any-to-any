import { Text } from "types";

export const ukNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnOuHiatusRules } = await import("data/latn/latn_ou-hiatus.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  return convertText(
    text,
    ukLatnRules + latnSeparatorRules + latnOuHiatusRules + latnDzjRules + latnNlRules,
  );
};
