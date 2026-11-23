import { Text } from "types";

export const ruEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnIaRules } = await import("data/latn/latn_ia.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIjRules } = await import("data/latn/latn_ij.rules");
  const { latnIyIRules } = await import("data/latn/latn_iy-i.rules");
  const { latnAiRules } = await import("data/latn/latn_ai.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(
    text,
    ruLatnRules +
      latnIaRules +
      latnSeparatorRules +
      latnIjRules +
      latnIyIRules +
      latnAiRules +
      latnDzjRules +
      latnDzRules +
      latnEsRules,
  );
};
