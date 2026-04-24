import { Text } from "types/languages";

export const heIpa = async (text: Text) => {
  const { heIpaMap, charMap } = await import("constants/he-ipa.map");

  const convert = (text: string) => {
    const SINGLE_PREFIXES = ["ו", "ב", "כ", "ל", "מ", "ה"];
    const DOUBLE_PREFIXES = ["וב", "וכ", "ול", "ומ", "וה", "שה", "מה"];

    const convertHebrewToIPA = (text: string): string => {
      let processedText = text;
      const multiWordKeys = Object.keys(heIpaMap)
        .filter(key => key.includes(" "))
        .sort((a, b) => b.length - a.length);

      for (const key of multiWordKeys) {
        const regex = new RegExp(key, "g");
        processedText = processedText.replace(regex, heIpaMap[key]);
      }

      const tokens = processedText.split(/([^\u0590-\u05FF]+)/);

      return tokens
        .map(token => {
          if (!/^[\u0590-\u05FF]+$/.test(token)) {
            return token;
          }
          return processWord(token);
        })
        .join("");
    };

    const processWord = (word: string): string => {
      // Step 1: Direct Dictionary Match
      if (heIpaMap[word]) {
        return heIpaMap[word];
      }

      // Step 2: Double Prefix Check (e.g., "וב" - and in)
      for (const prefix of DOUBLE_PREFIXES) {
        if (word.startsWith(prefix) && word.length > prefix.length) {
          const stem = word.slice(prefix.length);
          if (heIpaMap[stem]) {
            return applyPrefix(prefix, heIpaMap[stem], stem);
          }
        }
      }

      // Step 3: Single Prefix Check (e.g., "ה" - the)
      for (const prefix of SINGLE_PREFIXES) {
        if (word.startsWith(prefix) && word.length > prefix.length) {
          const stem = word.slice(prefix.length);
          if (heIpaMap[stem]) {
            return applyPrefix(prefix, heIpaMap[stem], stem);
          }
        }
      }

      return applyHeuristicFallback(word);
    };

    const applyPrefix = (prefix: string, ipaStem: string, hebrewStem: string): string => {
      let prefixIpa: string;

      switch (prefix) {
        case "ה":
          prefixIpa = "ha";
          // Handle Begadkefat hardening after 'ha'
          if (hebrewStem.startsWith("ב")) ipaStem = ipaStem.replace(/^v/, "b");
          if (hebrewStem.startsWith("כ")) ipaStem = ipaStem.replace(/^χ/, "k");
          if (hebrewStem.startsWith("פ")) ipaStem = ipaStem.replace(/^f/, "p");
          break;
        case "ל":
          prefixIpa = "le";
          break;
        case "ב":
          prefixIpa = "be";
          break;
        case "ו":
          prefixIpa = "ve";
          break;
        case "מ":
          prefixIpa = "mi";
          break;
        case "כ":
          prefixIpa = "ke";
          break;
        case "וב":
          prefixIpa = "uve";
          break;
        case "ול":
          prefixIpa = "ule";
          break;
        case "וה":
          prefixIpa = "veha";
          break;
        default:
          prefixIpa = "";
      }

      if (["ב", "ל", "ו", "כ", "וב", "ול"].includes(prefix)) {
        if (hebrewStem.startsWith("ב")) ipaStem = ipaStem.replace(/^b/, "v");
        if (hebrewStem.startsWith("כ")) ipaStem = ipaStem.replace(/^k/, "χ");
        if (hebrewStem.startsWith("פ")) ipaStem = ipaStem.replace(/^p/, "f");
      }

      return prefixIpa + ipaStem;
    };

    const applyHeuristicFallback = (word: string): string => {
      let processed = word;

      processed = processed.replace(/^י/, "j");
      processed = processed.replace(/^ו/, "v");

      const startsWithB = processed.startsWith("ב");
      const startsWithK = processed.startsWith("כ");
      const startsWithP = processed.startsWith("פ");

      processed = processed.replace(/יה$/, "ja");
      processed = processed.replace(/ה$/, "a");

      processed = processed.replace(/וו/g, "v");
      processed = processed.replace(/יי/g, "j");

      let output = "";
      for (let i = 0; i < processed.length; i++) {
        const char = processed[i];
        output += charMap[char] || char; // fallback to original if not in map
      }

      // Re-apply word-initial Begadkefat stops
      if (startsWithB) output = output.replace(/^v/, "b");
      if (startsWithK) output = output.replace(/^χ/, "k");
      if (startsWithP) output = output.replace(/^f/, "p");

      return output;
    };

    return convertHebrewToIPA(text);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(async text => convert(text));
  }
};
