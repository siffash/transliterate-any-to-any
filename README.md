# transliterate-any-to-any

A Node.js library for transliteration from any language to any language (see the list of supported languages).

### Most suitable for transliteration of:

- place names (toponyms)
- personal names
- business names

## Examples

```typescript
import {transliterate} from "transliterate-any-to-any";

await transliterate("Копривщица", {from: "bg", to: "en"}); // Koprivshtitsa ???????
```

## Prerequisites

- You need to have `pkg-config` (`brew install pkg-config`)
- You need to have ICU (`brew install icu4c`)
- You need to have ICU added to the `pkg-config` path (e.g.
  `echo 'export PKG_CONFIG_PATH="/opt/homebrew/opt/icu4c@78/lib/pkgconfig"' >> ~/.zshrc` for macOS)

## API Reference

### `transliterate(text, options): string | string[]`

| Parameter | Type                 | Required | Description         |
|-----------|----------------------|----------|---------------------|
| `text`    | `string \| string[]` | Yes      | Input text or texts |
| `options` | `object`             | Yes      | Options - see below |

### Options

| Object property | Type      | Required | Default | Description                                                                                        |
|-----------------|-----------|----------|---------|----------------------------------------------------------------------------------------------------|
| `from`          | `string`  | Yes      | -       | Input language in [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag)  |
| `to`            | `string`  | Yes      | -       | Output language in [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag) |
| `latin_ASCII`   | `boolean` | No       | `false` | If `true` and the output language is a Latin-script language - converts to Latin ASCII             |

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