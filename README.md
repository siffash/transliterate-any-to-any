# transliterate-any-to-any

A Node.js library for transliteration from any language to any language (see the list of supported languages).

### Suitable for transliteration of:

- **toponyms** (e.g. names of cities, streets, rivers, mountains, etc.)
- **names of people** (first, middle, last, etc.)
- **names of companies, organizations, businesses, brands**, etc.

## Examples

```typescript
import { transliterate } from "transliterate-any-to-any";

await transliterate("Копривщица", { input: "bg", output: "en" }); // Koprivshtitsa ???????
```

## Limitations

- There are no transliteration rules between languages using Latin script, e.g. if you transliterate from Norwegian to
  Italian you'll get the same string (unless you use `latin_ASCII: true` option).
- Cyrillic is not supported for Serbian and Kazakh languages (only Latin).

## Prerequisites

- You need to have `pkg-config` (`brew install pkg-config`)
- You need to have ICU (`brew install icu4c`)
- You need to have ICU added to the `pkg-config` path (e.g.
  `echo 'export PKG_CONFIG_PATH="/opt/homebrew/opt/icu4c@78/lib/pkgconfig"' >> ~/.zshrc` for macOS)

## API Reference

### `transliterate(text, language[, options]): string | null`

| Parameter  | Object property | Type                 | Required | Default | Description                                                                                        |
|------------|-----------------|----------------------|----------|---------|----------------------------------------------------------------------------------------------------|
| `text`     |                 | `string \| string[]` | Yes      |         | Input text (can be an array of strings for batching)                                               |
| `language` |                 | `object`             | Yes      |         | Input and output languages - see below                                                             |
| ↳          | `input`         | `string`             | Yes      |         | Input language in [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag)  |
| ↳          | `output`        | `string`             | Yes      |         | Output language in [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag) |
| `options`  |                 | `object`             | No       |         | Options - see below                                                                                |
| ↳          | `latin_ASCII`   | `boolean`            | No       | `false` | If `true` and the output language is a language that uses Latin script - converts to Latin ASCII   |

## Supported languages

## Third-party libraries used

- [ICU](https://icu.unicode.org/)'s
  [Rule-Based Transliterators](https://unicode-org.github.io/icu/userguide/transforms/general/rules.html)
  through [icu-transliterator](https://www.npmjs.com/package/icu-transliterator)
- [aromanize](https://www.npmjs.com/package/aromanize) for handling Korean Hangul
- [hangul-js](https://www.npmjs.com/package/hangul-js) for handling Korean Hangul
- [pinyin-pro](https://www.npmjs.com/package/pinyin-pro) for handling Pinyin (Chinese)
- [opencc](https://www.npmjs.com/package/opencc) for handling Traditional Chinese, Simplified Chinese and Japanese
  Kanji (Shinjitai)
- [kuroshiro](https://www.npmjs.com/package/kuroshiro) for handling Japanese Hiragana and Katakana
- [kuroshiro-analyzer-kuromoji](https://www.npmjs.com/package/kuroshiro-analyzer-kuromoji) for handling Japanese
  Hiragana and Katakana
- [hanviet-pinyin-words](https://www.npmjs.com/package/hanviet-pinyin-words) for handling Vietnamese
- [phonemize](https://www.npmjs.com/package/phonemize) for converting some languages to IPA