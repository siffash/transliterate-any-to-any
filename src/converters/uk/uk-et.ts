import { Text } from "types";

export const ukEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { ukLatnJoRules } = await import("data/uk/uk-latn_jo.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnAiRules } = await import("data/latn/latn_ai.rules");
  const { latnEtCyrlRules } = await import("data/latn/latn-et_cyrl.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  return convertText(
    text,
    ukLatnRules +
      ukLatnJoRules +
      latnSeparatorRules +
      latnAiRules +
      latnEtCyrlRules +
      latnEtRules +
      latnJRestoreRules,
  );
};
