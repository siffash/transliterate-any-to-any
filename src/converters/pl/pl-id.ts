import { Text } from "types";

export const plId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, plLatnRules + latnIdRules);
};
