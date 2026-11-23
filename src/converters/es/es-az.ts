import { Text } from "types";

export const esAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { esLatnYHoldRules } = await import("data/es/es-latn_y-hold.rules");
  const { esLatnAzRules } = await import("data/es/es-latn_az.rules");
  const { latnAzLyeRules } = await import("data/latn/latn-az_lye.rules");
  const { esLatnYRestoreRules } = await import("data/es/es-latn_y-restore.rules");

  return convertText(
    text,
    esLatnYHoldRules +
      esLatnRules +
      esLatnAzRules +
      esLatnYRestoreRules +
      latnAzLyeRules +
      latnAzRules,
  );
};
