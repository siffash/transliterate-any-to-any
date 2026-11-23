import { Text } from "types";

export const esZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaZhWRules } = await import("data/ipa/ipa-zh_w.rules");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { esIpaZhRules } = await import("data/es/es-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhSanRules } = await import("data/ipa/ipa-zh_san.rules");
  const { ipaZhKeRules } = await import("data/ipa/ipa-zh_ke.rules");
  const { ipaZhLjeRules } = await import("data/ipa/ipa-zh_lje.rules");

  return convertText(
    text,
    esIpaRules +
      esIpaZhRules +
      ipaZhWRules +
      ipaZhSanRules +
      ipaZhKeRules +
      ipaZhLjeRules +
      ipaZhRules,
  );
};
