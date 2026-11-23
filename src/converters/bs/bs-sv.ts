import { Text } from "types";

export const bsSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnXHRules } = await import("data/latn/latn_x-h.rules");

  return convertText(
    text,
    bsLatnRules + latnSlavicLjRules + latnSlavicNjRules + latnXHRules + latnSvRules,
  );
};
