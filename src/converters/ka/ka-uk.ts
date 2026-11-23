import { Text } from "types";

export const kaUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { kaLatnJoinRules } = await import("data/ka/ka-latn_join.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  return convertText(text, kaLatnRules + kaLatnJoinRules + latnUkRules);
};
