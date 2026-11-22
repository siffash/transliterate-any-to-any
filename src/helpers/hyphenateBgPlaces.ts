const GENERIC =
  /^(?:(?:Горн|Долн|Нов|Стар|Голям|Голем|Мал|Бел|Бял|Черн|Средн|Свет)[оаиея]?|Големи|Малки)$/iu;
const PLACE_ENDING = /(?:ово|ево|ино|ене|ане|ци|ица|ище|ец)$/iu;

export const hyphenateBgPlaces = (text: string, generics = true): string =>
  text
    .split(/([,;]\s*)/)
    .map(name =>
      name.replace(
        /^([^\p{L}\p{M}]*)(\p{L}+) (\p{L}+)([^\p{L}\p{M}]*)$/u,
        (match, before, first, second, after) => {
          const isGeneric = GENERIC.test(first);
          const isPlace = generics
            ? isGeneric || PLACE_ENDING.test(second)
            : !isGeneric && PLACE_ENDING.test(second);
          return isPlace ? `${before}${first}-${second}${after}` : match;
        },
      ),
    )
    .join("");
