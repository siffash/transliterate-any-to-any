import { Text } from "types";

export const itSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, itLatnRules + latnSkRules);
};
