import { Text } from "types";

export const slUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { latnUkSouthSlavicIRules } = await import("data/latn/latn-uk_south-slavic-i.rules");
  const { latnApostropheDropRules } = await import("data/latn/latn_apostrophe-drop.rules");
  const { ukSouthSlavicAdjRules } = await import("data/uk/uk_south-slavic-adj.rules");
  const { ukEcRules } = await import("data/uk/uk_ec.rules");
  const { ukIcaRules } = await import("data/uk/uk_ica.rules");
  const { ukIjaRules } = await import("data/uk/uk_ija.rules");

  const transliterator = RBT.fromRules(
    slLatnRules +
      latnUkSouthSlavicIRules +
      latnUkRules +
      ukIjaRules +
      ukIcaRules +
      ukEcRules +
      ukSouthSlavicAdjRules +
      latnApostropheDropRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
