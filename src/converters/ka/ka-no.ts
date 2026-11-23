import { Text } from "types";

export const kaNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, kaLatnRules + latnNoRules);
};
