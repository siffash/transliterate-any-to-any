import { Text } from "types";

export const srSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srLatnRules } = await import("data/sr/sr-latn.rules");
  const { latnSlavicLjRules } = await import("data/latn/latn_slavic-lj.rules");
  const { latnSlavicNjRules } = await import("data/latn/latn_slavic-nj.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");
  const { latnSqLjRules } = await import("data/latn/latn-sq_lj.rules");
  const { latnSqErRules } = await import("data/latn/latn-sq_er.rules");

  return convertText(
    text,
    srLatnRules +
      latnSlavicLjRules +
      latnSlavicNjRules +
      latnSqLjRules +
      latnSqErRules +
      latnSqRules,
  );
};
