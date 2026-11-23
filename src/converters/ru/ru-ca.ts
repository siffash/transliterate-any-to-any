import { Text } from "types";

export const ruCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnLNRules } = await import("data/latn/latn_l-n.rules");
  const { latnCaSxRules } = await import("data/latn/latn-ca_sx.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnCaJHoldRules } = await import("data/latn/latn-ca_j-hold.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  return convertText(
    text,
    ruLatnRules +
      latnSeparatorRules +
      latnLNRules +
      latnCaSxRules +
      latnDzRules +
      latnCaJHoldRules +
      latnCaRules +
      latnJRestoreRules,
  );
};
