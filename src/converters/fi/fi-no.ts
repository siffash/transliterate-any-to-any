import { Text } from "types";

export const fiNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, fiLatnRules + latnNoRules);
};
