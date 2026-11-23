import { Text } from "types";

export const ukSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");
  const { latnLNFinalRules } = await import("data/latn/latn_l-n-final.rules");
  const { ukLatnGRules } = await import("data/uk/uk-latn_g.rules");

  return convertText(
    text,
    ukLatnRules + latnSeparatorRules + ukLatnGRules + latnLNFinalRules + latnSlRules,
  );
};
