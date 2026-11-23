import { Text } from "types";

export const kaSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");
  const { latnSlIjRules } = await import("data/latn/latn-sl_ij.rules");

  return convertText(text, kaLatnRules + latnSlRules + latnSlIjRules);
};
