import { Text } from "types";

export const ukDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { ukLatnJoRules } = await import("data/uk/uk-latn_jo.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, ukLatnRules + ukLatnJoRules + latnSeparatorRules + latnDaRules);
};
