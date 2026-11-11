import { Text } from "types";

export const kkFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { kkLatnORules } = await import("data/kk/kk-latn_o.rules");
  const { kkLatnFrRules } = await import("data/kk/kk-latn_fr.rules");
  const { latnAiRules } = await import("data/latn/latn_ai.rules");
  const { latnOuHiatusRules } = await import("data/latn/latn_ou-hiatus.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnFrTremaRules } = await import("data/latn/latn-fr_trema.rules");

  const transliterator = RBT.fromRules(
    kkLatnRules +
      kkLatnORules +
      kkLatnFrRules +
      latnAiRules +
      latnOuHiatusRules +
      latnFrRules +
      latnFrTremaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
