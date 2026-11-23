import { Text } from "types";

export const kaPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { kaLatnJoinRules } = await import("data/ka/ka-latn_join.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  return convertText(text, kaLatnRules + kaLatnJoinRules + latnPtRules);
};
