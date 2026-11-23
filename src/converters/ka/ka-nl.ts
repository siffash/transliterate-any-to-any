import { Text } from "types";

export const kaNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { kaLatnJoinRules } = await import("data/ka/ka-latn_join.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  return convertText(text, kaLatnRules + latnDzjRules + kaLatnJoinRules + latnNlRules);
};
