import { Text } from "types";

export const deLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { deLatnDtRules } = await import("data/de/de-latn_dt.rules");
  const { deLatnEiRules } = await import("data/de/de-latn_ei.rules");
  const { deLatnEiRestoreRules } = await import("data/de/de-latn_ei-restore.rules");
  const { latnLtOeRules } = await import("data/latn/latn-lt_oe.rules");

  return convertText(
    text,
    deLatnEiRules +
      deLatnRules +
      deLatnDtRules +
      deLatnEiRestoreRules +
      latnLtOeRules +
      latnLtRules,
  );
};
