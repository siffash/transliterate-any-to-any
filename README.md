https://pypi.org/project/cyrtranslit/

# transliterate-any-to-any

#### A Node.js library for transliteration from any language to any language (see the list of supported languages).

### Examples:

```typescript
import {transliterate} from "transliterate-any-to-any";

await transliterate("Копривщица", {input: "bg", output: "en"}); // Koprivshtitsa ???????
```

### Suitable for transliteration of names, e.g.:

- Toponyms (e.g. names of cities, streets, rivers, mountains, etc.)
- Names of people (first, middle, last, etc.)
- Names of companies, organizations, businesses, brands, etc.

### Limitations

- There are no transliteration rules between Latin languages, e.g. if you transliterate from Norwegian to Italian you'll
  get the same string (unless you use `latin_ASCII: true` option).
- All Latin languages are treated as one - there are no transliteration rules from a specific Latin language to other
  languages, and vice versa.
- Serbian and Kazakh are considered only as Latin languages, not Cyrillic.
- Vocabularies for historical overrides are not present.

### Supported languages

### Third-party libraries used

- [ICU's](https://icu.unicode.org/) [Rule-Based Transliterators](https://unicode-org.github.io/icu/userguide/transforms/general/rules.html)
  through [icu-transliterator](https://www.npmjs.com/package/icu-transliterator)
- [aromanize](https://www.npmjs.com/package/aromanize) for handling Korean Hangul
- [hangul-js](https://www.npmjs.com/package/hangul-js) for handling Korean Hangul
- [pinyin-pro](https://www.npmjs.com/package/pinyin-pro) for handling Pinyin (Chinese)
- [opencc](https://www.npmjs.com/package/opencc) for handling Traditional Chinese, Simplified Chinese and Japanese
  Kanji (Shinjitai)
- [kuroshiro](https://www.npmjs.com/package/kuroshiro) for handling Japanese Hiragana and Katakana
- [kuroshiro-analyzer-kuromoji](https://www.npmjs.com/package/kuroshiro-analyzer-kuromoji) for handling Japanese
  Hiragana and Katakana

### Prerequisites

- You need to have `pkg-config` (`brew install pkg-config`)
- You need to have ICU (`brew install icu4c`)
- You need to have ICU added to the `pkg-config` path (e.g.
  `echo 'export PKG_CONFIG_PATH="/opt/homebrew/opt/icu4c@78/lib/pkgconfig"' >> ~/.zshrc` for macOS)

### Installation

- `npm i transliterate-any-to-any`

### What you can import

- Function `transliterate(text, language[, options]): string | null`

| Parameter  | Object property | Type      | Required | Default | Description                                                                                        |
|------------|-----------------|-----------|----------|---------|----------------------------------------------------------------------------------------------------|
| `text`     |                 | `string`  | Yes      |         | Input text                                                                                         |
| `language` |                 | `object`  | Yes      |         | Input and output languages - see below                                                             |
|            | `input`         | `string`  | No       |         | Input language in [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag)  |
|            | `output`        | `string`  | Yes      |         | Output language in [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag) |
| `options`  |                 | `object`  | No       |         | Options - see below                                                                                |
|            | `silent`        | `boolean` | No       | `false` | If `true` - never throws errors, returns `null` instead                                            |
|            | `latin_ASCII`   | `boolean` | No       | `false` | If `true` and the output language is a Latin language - converts to Latin ASCII                    |

### Recommendations

- Consider caching the transliteration results or writing them to a DB.
- If you need to support more languages/scripts, feel free to fork the repo or create a PR.