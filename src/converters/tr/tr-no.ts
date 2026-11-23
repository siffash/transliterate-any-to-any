import { Text } from "types";

export const trNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, trLatnRules + latnIRules + latnNoRules);
};
