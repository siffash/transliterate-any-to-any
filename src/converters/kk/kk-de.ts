import { Text } from "types";

export const kkDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnJeRules } = await import("data/kk/kk-latn_je.rules");
  const { kkNgRules } = await import("data/kk/kk_ng.rules");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnAiRules } = await import("data/latn/latn_ai.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  return convertText(
    text,
    kkLatnJeRules +
      kkNgRules +
      kkLatnRules +
      latnGGhRules +
      latnAiRules +
      latnQHoldRules +
      latnDeRules +
      latnQRestoreRules,
  );
};
