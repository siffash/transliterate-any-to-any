import { Text } from "types";

export const nlVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, nlLatnRules + latnSilentHRules + latnViRules);
};
