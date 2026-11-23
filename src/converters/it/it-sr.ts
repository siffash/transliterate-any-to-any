import { Text } from "types";

export const itSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnSrRules } = await import("data/it/it-latn_sr.rules");
  const { itLatnYeRules } = await import("data/it/it-latn_ye.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { itLatnSrPreRules } = await import("data/it/it-latn_sr-pre.rules");
  const { latnSrDjRules } = await import("data/latn/latn-sr_dj.rules");

  return convertText(
    text,
    itLatnSrPreRules + itLatnRules + itLatnYeRules + itLatnSrRules + latnSrDjRules + latnSrRules,
  );
};
