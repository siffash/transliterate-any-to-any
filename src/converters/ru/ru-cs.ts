import { Text } from "types";

export const ruCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnCsRules } = await import("data/ru/ru-latn_cs.rules");
  const { ruLatnCsskRules } = await import("data/ru/ru-latn_cssk.rules");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");
  const { latnCsYRestoreRules } = await import("data/latn/latn-cs_y-restore.rules");
  const { latnKsXRules } = await import("data/latn/latn_ks-x.rules");

  return convertText(
    text,
    ruLatnCsRules +
      ruLatnCsskRules +
      ruLatnRules +
      latnSeparatorRules +
      latnCsRules +
      latnCsYRestoreRules +
      latnKsXRules,
  );
};
