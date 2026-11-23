import { Text } from "types";

export const itNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { latnZSRules } = await import("data/latn/latn_z-s.rules");

  return convertText(text, itLatnRules + latnNoRules + latnZSRules);
};
