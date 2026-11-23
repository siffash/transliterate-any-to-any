import { Text } from "types";

export const itSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  return convertText(text, itLatnRules + latnSlRules);
};
