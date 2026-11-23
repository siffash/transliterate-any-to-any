import { Text } from "types";

export const bgDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { bgLatnIjaRules } = await import("data/bg/bg-latn_ija.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  return convertText(text, bgLatnIjaRules + bgLatnRules + latnDeRules + latnJRestoreRules);
};
