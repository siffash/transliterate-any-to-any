import { Text } from "types";

export const mkCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkKjRules } = await import("data/mk/mk_kj.rules");
  const { mkEnRules } = await import("data/mk/mk-en.rules");

  return convertText(text, mkKjRules + mkEnRules);
};
