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
    const tokens = text.match(/[\p{L}\p{M}]+|[^\p{L}\p{M}]+/gu) || [];

    const maxWindow = 9;
    let result = "";
    let i = 0;

    while (i < tokens.length) {
      const token = tokens[i];

      if (!/^[\p{L}\p{M}]+$/u.test(token)) {
        result += token;
        i++;
        continue;
      }

      let matchFound = false;

      for (let windowSize = maxWindow; windowSize > 0; windowSize--) {
        const candidateWords: string[] = [];
        let tokensConsumed = 0;

        for (let j = i; j < tokens.length && candidateWords.length < windowSize; j++) {
          tokensConsumed++;
          const lookaheadToken = tokens[j];

          if (/^[\p{L}\p{M}]+$/u.test(lookaheadToken)) {
            candidateWords.push(lookaheadToken.toLowerCase());
          } else if (/[.,!?;:()"]/.test(lookaheadToken)) {
            break;
          }
        }

        if (candidateWords.length === windowSize) {
          const lookupKey = candidateWords.join(" ");

          const compound = lookup(compoundDictionary, lookupKey);

          if (compound) {
            result += compound;
            i += tokensConsumed;
            matchFound = true;
            break;
          }
        }
      }

      if (!matchFound) {
        const exact = lookup(singleDictionary, token.toLowerCase());

        if (exact) {
          result += exact;
        } else {
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

    return result
      .replace(/([\u4E00-\u9FFF])\s+([\u4E00-\u9FFF])/g, "$1$2")
      .replace(/([\u4E00-\u9FFF])\s+([\u4E00-\u9FFF])/g, "$1$2");
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(text => convert(text)));
  }
};
