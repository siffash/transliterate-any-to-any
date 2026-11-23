import { Text } from "types";

export const bgEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnIyIRules } = await import("data/latn/latn_iy-i.rules");
  const { latnIaRules } = await import("data/latn/latn_ia.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(
    text,
    bgLatnRules + latnIyIRules + latnIaRules + latnDzjRules + latnDzRules + latnEsRules,
  );
};
