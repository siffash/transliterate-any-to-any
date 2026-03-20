export { supportedLanguages } from "constants/languages";
export { Language } from "types/languages";
export { transliterate } from "utils/transliterate";

// *** EXPERIMENTS ***
import { RBT } from "icu-transliterator";
import { enIpaRules } from "constants/en-ipa.rules";
import { ipaZhRules } from "constants/ipa-zh.rules";
const test = async () => {
  const transliterator = RBT.fromRules(enIpaRules);
  console.log(
    transliterator.transliterate(`Alpine
London, Tokyo, Nairobi, Vancouver, Rio de Janeiro, Istanbul, Sydney, Mumbai, Reykjavik, Buenos Aires, Casablanca, Edinburgh, Singapore, Kathmandu, Lisbon, Mexico City, Amsterdam, Stockholm, Vienna, Florence, James Alexander Sterling, Elizabeth Marie Montgomery, William Thomas Jefferson, Catherine Anne Sullivan, Robert Michael Henderson, Sophia Louise Richardson, David Christopher Wallace, Margaret Rose Fitzgerald, Benjamin Edward Thompson, Olivia Grace Patterson, Samuel Richard Harrison, Eleanor Jane Whittaker, Jonathan David Miller, Victoria Beatrice Thorne, Nicholas Arthur Sterling, Isabella Mary Crawford, Daniel Patrick O'Sullivan, Beatrice Alice Kensington, Henry Lawrence Faulkner, Penelope Diane Wentworth, Global Innovation Technologies, Silver Creek Manufacturing, Horizon Strategic Consulting, Radiant Energy Solutions, Emerald Valley Agriculture, Northern Star Logistics, Peak Performance Athletics, Blue Marble Aerospace, Golden Gate Software, Velvet Thread Textiles, Crystal Clear Communications, Iron Works Infrastructure, Harmony Health Systems, Midnight Sun Productions, Prairie Wind Renewables, Grand Vista Hospitality, Sterling Bridge Finance, Alpine Ridge Outdoor, Urban Pulse Media, Crimson Oak Furniture
`),
  );
};
test();
