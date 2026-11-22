import { Text } from "types";

export const nlHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { nlIpaXRules } = await import("data/nl/nl-ipa_x.rules");

  const transliterator = RBT.fromRules(
    nlLatnRules + latnSilentHRules + nlIpaXRules + latnHyRules + hyEvRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
