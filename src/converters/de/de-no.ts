import { Text } from "types";

export const deNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { latnZSRules } = await import("data/latn/latn_z-s.rules");

  return convertText(text, deLatnRules + latnNoRules + latnZSRules);
};
