import { Text } from "types";

export const ukNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { ukLatnJoRules } = await import("data/uk/uk-latn_jo.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, ukLatnRules + ukLatnJoRules + latnSeparatorRules + latnNoRules);
};
