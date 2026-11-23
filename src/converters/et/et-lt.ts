import { Text } from "types";

export const etLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnVvRules } = await import("data/latn/latn_vv.rules");
  const { latnHyphenSpaceRules } = await import("data/latn/latn_hyphen-space.rules");
  const { latnIERules } = await import("data/latn/latn_i-e.rules");

  return convertText(
    text,
    etLatnRules + latnIERules + latnLtRules + latnVvRules + latnHyphenSpaceRules,
  );
};
