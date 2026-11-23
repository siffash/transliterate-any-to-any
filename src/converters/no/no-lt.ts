import { Text } from "types";

export const noLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { noLatnAuRules } = await import("data/no/no-latn_au.rules");
  const { noLatnLtRules } = await import("data/no/no-latn_lt.rules");
  const { noSvLatnLtRules } = await import("data/latn/no_sv-latn_lt.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnVvRules } = await import("data/latn/latn_vv.rules");

  return convertText(
    text,
    noLatnLtRules + noSvLatnLtRules + noLatnRules + noLatnAuRules + latnLtRules + latnVvRules,
  );
};
