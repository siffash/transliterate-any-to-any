import { Text } from "types";

export const ruSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnSkRules } = await import("data/ru/ru-latn_sk.rules");
  const { ruLatnCsskRules } = await import("data/ru/ru-latn_cssk.rules");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");
  const { latnKsXRules } = await import("data/latn/latn_ks-x.rules");

  return convertText(
    text,
    ruLatnSkRules + ruLatnCsskRules + ruLatnRules + latnSeparatorRules + latnSkRules + latnKsXRules,
  );
};
