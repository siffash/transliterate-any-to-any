import { Text } from "types";

export const kkFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { kkLatnORules } = await import("data/kk/kk-latn_o.rules");
  const { kkLatnFrRules } = await import("data/kk/kk-latn_fr.rules");
  const { latnAiRules } = await import("data/latn/latn_ai.rules");
  const { latnOuHiatusRules } = await import("data/latn/latn_ou-hiatus.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnFrTremaRules } = await import("data/latn/latn-fr_trema.rules");

  return convertText(
    text,
    kkLatnRules +
      kkLatnORules +
      kkLatnFrRules +
      latnAiRules +
      latnOuHiatusRules +
      latnFrRules +
      latnFrTremaRules,
  );
};
