import { Text } from "types";

export const bgSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgSchwaRules } = await import("data/bg/bg_schwa.rules");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { bgLatnIjaRules } = await import("data/bg/bg-latn_ija.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  return convertText(
    text,
    bgSchwaRules + bgLatnIjaRules + bgLatnRules + latnDzjRules + latnSvRules + latnJRestoreRules,
  );
};
