import { Text } from "types";

export const kaSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnGGhRules } = await import("data/latn/latn_g-gh.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  return convertText(
    text,
    kaLatnRules + latnDzjRules + latnQHoldRules + latnGGhRules + latnSvRules + latnQRestoreRules,
  );
};
