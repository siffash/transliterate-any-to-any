import { Text } from "types";

export const ukAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { ukLatnGRules } = await import("data/uk/uk-latn_g.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(
    text,
    ukLatnRules + latnSeparatorRules + ukLatnGRules + latnIRules + latnAzRules,
  );
};
