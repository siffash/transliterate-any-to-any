import { Text } from "types";

/**
 * @param text - The Hebrew text.
 * @param addVowels - Whether a word spelled without vowel letters gets e between its consonants; scripts that
 * don't write short vowels (Arabic) keep its consonants only.
 */
export const heIpa = async <T = Text>(text: Text, addVowels = true): Promise<T> => {
  const { heIpaMap, charMap } = await import("data/he/he-ipa.map");
  const { filterIpa } = await import("helpers/filterIpa");

  const MARKS = /[\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7]/g;
  const VOWELS: Record<string, string> = {
    "\u05B1": "e",
    "\u05B2": "a",
    "\u05B3": "o",
    "\u05B4": "i",
    "\u05B5": "e",
    "\u05B6": "e",
    "\u05B7": "a",
    "\u05B8": "a",
    "\u05B9": "o",
    "\u05BA": "o",
    "\u05BB": "u",
    "\u05C7": "o",
  };
  const DAGESH_STOPS: Record<string, string> = { ב: "b", כ: "k", ך: "k", פ: "p", ף: "p" };

  // A pointed word read from its niqqud (הַרפָּז → harpaz), for words the map does not know
  const pointedIpa = (word: string): string => {
    const letters = [...word.matchAll(/([\u05D0-\u05EA])([\u0591-\u05BD\u05BF-\u05C7]*)/g)].map(
      ([, letter, marks]) => ({
        letter,
        marks,
      }),
    );
    let ipa = "";
    letters.forEach(({ letter, marks }, i) => {
      const vowel = [...marks].map(mark => VOWELS[mark] ?? "").join("");
      const dagesh = marks.includes("\u05BC");
      const last = i === letters.length - 1;
      if (letter === "ו" && !vowel && dagesh && i > 0) return void (ipa += "u");
      if (letter === "ו" && marks.includes("\u05B9") && i > 0) return void (ipa += "o");
      if (letter === "י" && !vowel && i > 0 && /[ie]$/.test(ipa)) return;
      if (letter === "ה" && !vowel && !dagesh && last) return;
      if ((letter === "א" || letter === "ע") && !vowel) return;
      const consonant =
        letter === "א" || letter === "ע"
          ? ""
          : letter === "ש" && marks.includes("\u05C2")
            ? "s"
            : letter === "ו"
              ? "v"
              : letter === "י"
                ? "j"
                : (dagesh || i === 0) && DAGESH_STOPS[letter]
                  ? DAGESH_STOPS[letter]
                  : charMap[letter];
      ipa += consonant + vowel;
    });
    return ipa;
  };

  const inMap = (word: string) =>
    !!heIpaMap[word] ||
    ["וב", "וכ", "ול", "ומ", "וה", "שה", "מה", "ו", "ב", "כ", "ל", "מ", "ה"].some(
      prefix => word.startsWith(prefix) && !!heIpaMap[word.slice(prefix.length)],
    );

  const convert = (text: string) => {
    // The gershayim of an acronym (חב״ד, also typed as ") isn't read
    text = text.replace(/(?<=[א-ת])[״"](?=[א-ת])/g, "");
    // Pointed words the map does not know are read from their niqqud
    text = text.replace(
      /[\u05D0-\u05EA](?:[\u05D0-\u05EA]|[\u0591-\u05BD\u05BF-\u05C7])*/g,
      word =>
        /[\u05B0-\u05BC\u05C1\u05C2\u05C7]/.test(word) && !inMap(word.replace(MARKS, ""))
          ? pointedIpa(word)
          : word,
    );
    // Niqqud and cantillation marks: the map and the fallback read unpointed spelling
    text = text.replace(MARKS, "");
    const SINGLE_PREFIXES = ["ו", "ב", "כ", "ל", "מ", "ה"];
    const DOUBLE_PREFIXES = ["וב", "וכ", "ול", "ומ", "וה", "שה", "מה"];

    const convertHebrewToIPA = (text: string): string => {
      let processedText = text;
      const multiWordKeys = Object.keys(heIpaMap)
        .filter(key => key.includes(" "))
        .sort((a, b) => b.length - a.length);

      for (const key of multiWordKeys) {
        const regex = new RegExp(key, "g");
        processedText = processedText.replace(regex, filterIpa(heIpaMap[key], key, "he"));
      }

      // A geresh after ג, ז, צ… (ג'ורג', צ׳ק) belongs to the word, as ' in the map keys
      const tokens = processedText
        .replace(/(?<=[גזצץתדח])['’׳]/g, "׳")
        .split(/([^\u0590-\u05FF]+)/);

      return tokens
        .map(token => {
          if (!/^[\u0590-\u05FF]+$/.test(token)) {
            return token;
          }
          return processWord(token.replaceAll("׳", "'"));
        })
        .join("");
    };

    const processWord = (word: string): string => {
      // Step 1: Direct Dictionary Match
      if (heIpaMap[word]) {
        return filterIpa(heIpaMap[word], word, "he");
      }

      // Step 2: Double Prefix Check (e.g., "וב" - and in)
      for (const prefix of DOUBLE_PREFIXES) {
        if (word.startsWith(prefix) && word.length > prefix.length) {
          const stem = word.slice(prefix.length);
          if (heIpaMap[stem]) {
            return applyPrefix(prefix, filterIpa(heIpaMap[stem], stem, "he"), stem);
          }
        }
      }

      // Step 3: Single Prefix Check (e.g., "ה" - the)
      for (const prefix of SINGLE_PREFIXES) {
        if (word.startsWith(prefix) && word.length > prefix.length) {
          const stem = word.slice(prefix.length);
          if (heIpaMap[stem]) {
            return applyPrefix(prefix, filterIpa(heIpaMap[stem], stem, "he"), stem);
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

      processed = processed.replace(/ג'/g, "d͡ʒ");
      processed = processed.replace(/ז'/g, "ʒ");
      processed = processed.replace(/[צץ]'/g, "t͡ʃ");

      processed = processed.replace(/וו/g, "v");
      processed = processed.replace(/יי/g, "j");

      // Aleph spells a; before ו/י it only marks a hiatus after a vowel letter or at the word start (אוסקר, לואיס)
      processed = processed.replace(/(?<=[וי])א(?=ל$)/, "ʔe"); // עמיאל, נואל
      processed = processed.replace(/(?<=[^וי])א(?=a$)/, "eʔ"); // לאה (final ה is already a)
      processed = processed.replace(/(?<=[^ויא])א(?!a$)|א(?![וי]|a$)/g, "a");

      let output = "";
      for (let i = 0; i < processed.length; i++) {
        const char = processed[i];
        output += charMap[char] || char; // fallback to original if not in map
      }

      // Re-apply word-initial Begadkefat stops
      if (startsWithB) output = output.replace(/^v/, "b");
      if (startsWithK) output = output.replace(/^χ/, "k");
      if (startsWithP) output = output.replace(/^f/, "p");

      // A word spelled without vowel letters gets e between its consonants, the most common reading of such
      // Hebrew words (גשר gesher, שמן shemen, פלס peles), and a next to an ע or א (עמל ʕamal, נעם naʕm);
      // one with י is read by the targets' own rules
      const sounds = output.match(/t͡s|t͡ʃ|d͡ʒ|./gu) ?? [];
      if (addVowels && sounds.length > 1 && !sounds.some(sound => /^[aeiouɛɔəɪʊj]/.test(sound))) {
        let result = "";
        sounds.forEach((sound, i) => {
          const glottal = /^[ʔʕ]$/.test(sound);
          const previous = sounds[i - 1];
          if (glottal) result += previous ? "a" + sound : sound + "a";
          else result += (previous && !/^[ʔʕ]$/.test(previous) ? "e" : "") + sound;
        });
        return result;
      }
      // Two consonants before an ע or א and a vowel take i between them (צבעון tsivʕon, גבעות givʕot)
      const [first, second, third, fourth] = sounds;
      if (
        addVowels &&
        [first, second].every(sound => sound && !/^[aeiouɛɔəɪʊʔʕ]/.test(sound)) &&
        /^[ʔʕ]$/.test(third ?? "") &&
        /^[aeiouɛɔ]/.test(fourth ?? "")
      ) {
        return first + "i" + sounds.slice(1).join("");
      }
      // so do they after the article (השבעה haʃivʕa), and one consonant before them takes a (מעון maʕon)
      const isConsonant = (sound?: string) => !!sound && !/^[aeiouɛɔəɪʊʔʕ]/.test(sound);
      if (
        addVowels &&
        first === "h" &&
        isConsonant(second) &&
        isConsonant(third) &&
        /^[ʔʕ]$/.test(fourth ?? "") &&
        /^[aeiouɛɔ]/.test(sounds[4] ?? "")
      ) {
        return "ha" + second + "i" + sounds.slice(2).join("");
      }
      if (
        addVowels &&
        isConsonant(first) &&
        /^[ʔʕ]$/.test(second ?? "") &&
        /^[aeiouɛɔ]/.test(third ?? "")
      ) {
        return first + "a" + sounds.slice(1).join("");
      }

      return output;
    };

    return convertHebrewToIPA(text);
  };

  if (typeof text === "string") {
    return convert(text) as T;
  } else {
    return text.map(convert) as T;
  }
};
