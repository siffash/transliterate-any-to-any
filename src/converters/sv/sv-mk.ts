import { Text } from "types";

export const svMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");
  const { latnMkVvRules } = await import("data/latn/latn-mk_vv.rules");
  const { svLatnShRules } = await import("data/sv/sv-latn_sh.rules");

  return convertText(
    text,
    svLatnRules + latnSilentHRules + svLatnShRules + latnMkRules + latnMkVvRules,
  );
};
