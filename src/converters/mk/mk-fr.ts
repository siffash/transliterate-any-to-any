import { Text } from "types";

export const mkFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkLatnRules } = await import("data/mk/mk-latn.rules");
  const { latnOuHiatusRules } = await import("data/latn/latn_ou-hiatus.rules");
  const { mkLatnFrRules } = await import("data/mk/mk-latn_fr.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnFrEFinalRules } = await import("data/latn/latn-fr_e-final.rules");

  return convertText(
    text,
    mkLatnRules + latnOuHiatusRules + mkLatnFrRules + latnFrRules + latnFrEFinalRules,
  );
};
