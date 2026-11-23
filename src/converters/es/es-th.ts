import { Text } from "types";

export const esTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { esIpaZRules } = await import("data/es/es-ipa_z.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  return convertText(
    text,
    esIpaZRules + esIpaRules + ipaThOpenRules + ipaThRules + ipaThKaranRules,
  );
};
