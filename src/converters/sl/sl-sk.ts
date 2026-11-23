import { Text } from "types";

export const slSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(text, slLatnRules + latnSkRules);
};
