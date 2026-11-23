import { Text } from "types";

export const roKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnSchwaRules } = await import("data/ro/ro-latn_schwa.rules");
  const { roLatnIiRules } = await import("data/ro/ro-latn_ii.rules");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnSchwaERules } = await import("data/latn/latn_schwa-e.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(
    text,
    roLatnSchwaRules + roLatnIiRules + roLatnRules + latnSchwaERules + latnKaRules,
  );
};
