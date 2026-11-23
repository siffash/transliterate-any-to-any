import { Text } from "types";

export const noSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, noLatnRules + latnSkRules);
};
