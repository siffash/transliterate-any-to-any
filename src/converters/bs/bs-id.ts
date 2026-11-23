import { Text } from "types";

export const bsId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, bsLatnRules + latnIdRules);
};
