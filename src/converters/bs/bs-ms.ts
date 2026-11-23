import { Text } from "types";

export const bsMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, bsLatnRules + latnMsRules);
};
