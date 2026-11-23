import { Text } from "types";

export const fiSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  return convertText(text, fiLatnRules + latnSlRules);
};
