import { Text } from "types";

export const ptNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { latnZSRules } = await import("data/latn/latn_z-s.rules");

  return convertText(text, ptLatnRules + latnNoRules + latnZSRules);
};
