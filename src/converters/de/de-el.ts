import { Text } from "types";

export const deEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");
  const { deElNgRules } = await import("data/de/de-el_ng.rules");

  return convertText(text, deLatnRules + latnElRules + deElNgRules);
};
