import { Text } from "types";

export const viZh = async (text: Text) => {
  const { compoundDictionary, singleDictionary } = await import("data/vi/vi-zh.map");
  const { RBT } = await import("helpers/rbt");
  const { viIpaRules } = await import("data/vi/vi-ipa.rules");
  const { viIpaZhRules } = await import("data/vi/vi-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliteratorToIpa = RBT.fromRules(viIpaRules);
  const transliteratorToZh = RBT.fromRules(viIpaZhRules + ipaZhRules);

  const lookup = (dictionary: Record<string, string>, key: string) =>
    Object.prototype.hasOwnProperty.call(dictionary, key) ? dictionary[key] : undefined;

  const convert = async (text: string) => {
    // 1. Tokenize: Split into words (letters + diacritics) and non-words (spaces/punctuation)
    // The 'u' flag is critical for \p{L} (Letters) and \p{M} (Marks/Diacritics) to support Vietnamese
    const tokens = text.match(/[\p{L}\p{M}]+|[^\p{L}\p{M}]+/gu) || [];

    const maxWindow = 9;
    let result = "";
    let i = 0;

    while (i < tokens.length) {
      const token = tokens[i];

      // If it's a non-word token (space, punctuation, number), append it directly
      if (!/^[\p{L}\p{M}]+$/u.test(token)) {
        result += token;
        i++;
        continue;
      }

      // It is a valid word token. Start Forward Maximum Matching.
      let matchFound = false;

      // Scan ahead to build candidate phrases, starting from maxWindow down to 2 words.
      // We stop at 2 because a 1-word match is handled by the Single Dictionary fallback.
      for (let windowSize = maxWindow; windowSize > 0; windowSize--) {
        const candidateWords: string[] = [];
        let tokensConsumed = 0;

        // Build the phrase by skipping over non-word tokens (like spaces)
        for (let j = i; j < tokens.length && candidateWords.length < windowSize; j++) {
          tokensConsumed++;
          const lookaheadToken = tokens[j];

          if (/^[\p{L}\p{M}]+$/u.test(lookaheadToken)) {
            candidateWords.push(lookaheadToken.toLowerCase());
          } else if (/[.,!?;:()"]/.test(lookaheadToken)) {
            // Hard stop: Do not build phrases across punctuation boundaries
            break;
          }
        }

        // If we successfully built a phrase of the target window size
        if (candidateWords.length === windowSize) {
          const lookupKey = candidateWords.join(" ");

          const compound = lookup(compoundDictionary, lookupKey);

          if (compound) {
            // Match found in the compound dictionary!
            result += compound;
            i += tokensConsumed; // Skip past all consumed tokens (including inner spaces)
            matchFound = true;
            break;
          }
        }
      }

      // If no compound phrase was found, process as a single word
      if (!matchFound) {
        const exact = lookup(singleDictionary, token.toLowerCase());

        // Priority 1: Exact Sino-Vietnamese match (no tone-stripped fallback:
        // it maps unrelated syllables, e.g. \u0111\u1ecbnh \u2192 \u0111inh \u4e01, t\u00e1m \u2192 tam \u4e09)
        if (exact) {
          result += exact;
        }
        // Priority 2: IPA Fallback via ICU Rules
        else {
          try {
            const ipa = transliteratorToIpa.transliterate(token);
            const chineseChar = transliteratorToZh.transliterate(ipa);
            result += chineseChar;
          } catch (e) {
            console.error(e);
            result += token;
          }
        }
        i++;
      }
    }

    // 3. Smart Spacing Cleanup
    // Vietnamese input has spaces between syllables (e.g., "Trung Quốc").
    // We want to remove spaces between Chinese characters, but KEEP spaces
    // between Chinese characters and English letters/numbers.
    return result
      .replace(/([\u4E00-\u9FFF])\s+([\u4E00-\u9FFF])/g, "$1$2")
      .replace(/([\u4E00-\u9FFF])\s+([\u4E00-\u9FFF])/g, "$1$2")
      .trim();
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(text => convert(text)));
  }
};
