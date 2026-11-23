import { Text } from "types";

export const ruEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnAiRules } = await import("data/latn/latn_ai.rules");
  const { latnEtCyrlRules } = await import("data/latn/latn-et_cyrl.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  return convertText(
    text,
    ruLatnRules +
      latnSeparatorRules +
      latnAiRules +
      latnEtCyrlRules +
      latnEtRules +
      latnJRestoreRules,
  );
};
