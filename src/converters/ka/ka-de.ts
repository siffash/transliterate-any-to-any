import { Text } from "types";

export const kaDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { kaLatnJoinRules } = await import("data/ka/ka-latn_join.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  return convertText(
    text,
    kaLatnRules + kaLatnJoinRules + latnQHoldRules + latnDeRules + latnQRestoreRules,
  );
};
