import { Text } from "types";

export const nlAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnUeRules } = await import("data/latn/latn_ue.rules");
  const { latnAzQRules } = await import("data/latn/latn-az_q.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  const transliterator = RBT.fromRules(
    nlLatnRules + latnSilentHRules + latnUeRules + latnAzQRules + latnAzRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
