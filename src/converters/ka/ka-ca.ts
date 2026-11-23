import { Text } from "types";

export const kaCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { kaLatnJoinRules } = await import("data/ka/ka-latn_join.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnCaJHoldRules } = await import("data/latn/latn-ca_j-hold.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnJRestoreRules } = await import("data/latn/latn_j-restore.rules");

  return convertText(
    text,
    kaLatnRules +
      kaLatnJoinRules +
      latnDzRules +
      latnCaJHoldRules +
      latnCaRules +
      latnJRestoreRules,
  );
};
