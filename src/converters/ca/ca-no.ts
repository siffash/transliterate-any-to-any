import { Text } from "types";

export const caNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { latnZSRules } = await import("data/latn/latn_z-s.rules");

  return convertText(text, caLatnRules + latnNoRules + latnZSRules);
};
