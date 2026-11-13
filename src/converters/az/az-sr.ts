import { Text } from "types";

export const azSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { trAzKkLatnOuRules } = await import("data/latn/tr_az_kk-latn_ou.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { azLatnQKRules } = await import("data/az/az-latn_q-k.rules");

  const transliterator = RBT.fromRules(
    azLatnQKRules + azLatnRules + trAzKkLatnOuRules + latnSrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
