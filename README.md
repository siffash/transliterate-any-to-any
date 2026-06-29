# transliterate-any-to-any

A Node.js library for transliteration from any language to any language (see the list
of [supported languages](#supported-languages)). Supports batching - you can pass an array of texts to be transliterated
at once. Does not load libraries/mappings/rules if they are not needed for transliteration between the specified
languages.

### Most suitable for transliteration of:

- Place names, toponyms (e.g. names of cities, neighborhoods, towns, villages, streets, rivers, mountains, etc.)
- Personal names (e.g. first names, middle names, last names, nicknames, etc.)
- Business names (e.g. company names, brand names, trademarks, etc.)

## Examples

```typescript
import { transliterate } from "transliterate-any-to-any";

await transliterate("Копривщица", { from: "bg", to: "en" }); // Koprivshtitsa ???????
```

## Prerequisites

- You need to have `pkg-config` (`brew install pkg-config`)
- You need to have ICU (`brew install icu4c`)
- You need to have ICU added to the `pkg-config` path (e.g.
  `echo 'export PKG_CONFIG_PATH="/opt/homebrew/opt/icu4c@78/lib/pkgconfig"' >> ~/.zshrc` for macOS)

## API Reference

### `transliterate(text, options): string | string[]`

| Parameter | Type                 | Required | Description         |
| --------- | -------------------- | -------- | ------------------- |
| `text`    | `string \| string[]` | Yes      | Input text or texts |
| `options` | `object`             | Yes      | Options - see below |

### Options

| Object property | Type     | Required | Default | Description                                                                  |
| --------------- | -------- | -------- | ------- | ---------------------------------------------------------------------------- |
| `from`          | `string` | Yes      | -       | Input language in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag)  |
| `to`            | `string` | Yes      | -       | Output language in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) |

## Supported languages

| English name     | [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) | [ISO 15924 script](https://en.wikipedia.org/wiki/ISO_15924) | Countries where it's mostly used                                      |
| ---------------- | --------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| Mandarin Chinese | zh                                                        | Hani (Hanzi+Kanji+Hanja)                                    | China, Taiwan, Singapore                                              |
| Japanese         | ja                                                        | Jpan (Hira+Kana+Han)                                        | Japan                                                                 |
| Korean           | ko                                                        | Kore (Hangul)                                               | South Korea, North Korea                                              |
| Hindi            | hi                                                        | Deva                                                        | India                                                                 |
| Arabic           | ar                                                        | Arab                                                        | Saudi Arabia, UAE, Egypt, many Middle Eastern/North African countries |
| Hebrew           | he                                                        | Hebr                                                        | Israel                                                                |
| Georgian         | ka                                                        | Geor                                                        | Georgia                                                               |
| Armenian         | hy                                                        | Armn                                                        | Armenia, Russia, Georgia, France                                      |
| Greek            | el                                                        | Grek                                                        | Greece, Cyprus                                                        |
| Russian          | ru                                                        | Cyrl                                                        | Russia, Belarus, Kazakhstan, Kyrgyzstan, Ukraine                      |
| Ukrainian        | uk                                                        | Cyrl                                                        | Ukraine                                                               |
| Bulgarian        | bg                                                        | Cyrl                                                        | Bulgaria                                                              |
| Macedonian       | mk                                                        | Cyrl                                                        | North Macedonia                                                       |
| Azerbaijani      | az                                                        | Latn                                                        | Azerbaijan, Russia, Georgia                                           |
| Bosnian          | bs                                                        | Latn                                                        | Bosnia and Herzegovina                                                |
| Catalan          | ca                                                        | Latn                                                        | Spain (Catalonia, Valencia, Balearic Islands), Andorra                |
| Czech            | cs                                                        | Latn                                                        | Czech Republic                                                        |
| Danish           | da                                                        | Latn                                                        | Denmark                                                               |
| German           | de                                                        | Latn                                                        | Germany, Austria, Switzerland, Belgium, Luxembourg, Liechtenstein     |
| English          | en                                                        | Latn                                                        | United Kingdom, Ireland, Malta                                        |
| Spanish          | es                                                        | Latn                                                        | Spain, Andorra                                                        |
| Estonian         | et                                                        | Latn                                                        | Estonia                                                               |
| Finnish          | fi                                                        | Latn                                                        | Finland                                                               |
| French           | fr                                                        | Latn                                                        | France, Belgium, Switzerland, Luxembourg                              |
| Croatian         | hr                                                        | Latn                                                        | Croatia, Bosnia and Herzegovina                                       |
| Hungarian        | hu                                                        | Latn                                                        | Hungary                                                               |
| Indonesian       | id                                                        | Latn                                                        | Indonesia                                                             |
| Icelandic        | is                                                        | Latn                                                        | Iceland                                                               |
| Italian          | it                                                        | Latn                                                        | Italy, Switzerland, San Marino, Vatican City                          |
| Kazakh           | kk                                                        | Latn                                                        | Kazakhstan (European part), Russia                                    |
| Luxembourgish    | lb                                                        | Latn                                                        | Luxembourg                                                            |
| Lithuanian       | lt                                                        | Latn                                                        | Lithuania                                                             |
| Latvian          | lv                                                        | Latn                                                        | Latvia                                                                |
| Maltese          | mt                                                        | Latn                                                        | Malta                                                                 |
| Dutch            | nl                                                        | Latn                                                        | Netherlands, Belgium                                                  |
| Norwegian        | no                                                        | Latn                                                        | Norway                                                                |
| Polish           | pl                                                        | Latn                                                        | Poland                                                                |
| Portuguese       | pt                                                        | Latn                                                        | Portugal                                                              |
| Romanian         | ro                                                        | Latn                                                        | Romania, Moldova                                                      |
| Slovak           | sk                                                        | Latn                                                        | Slovakia                                                              |
| Slovene          | sl                                                        | Latn                                                        | Slovenia                                                              |
| Albanian         | sq                                                        | Latn                                                        | Albania, Kosovo, North Macedonia                                      |
| Serbian          | sr                                                        | Latn                                                        | Serbia, Bosnia and Herzegovina, Montenegro, Kosovo                    |
| Swedish          | sv                                                        | Latn                                                        | Sweden, Finland                                                       |
| Turkish          | tr                                                        | Latn                                                        | Turkey, Cyprus (Turkish community)                                    |
| Vietnamese       | vi                                                        | Latn                                                        | Vietnam                                                               |

## Third-party libraries used

- [ICU](https://icu.unicode.org/)'s
  [Rule-Based Transliterators](https://unicode-org.github.io/icu/userguide/transforms/general/rules.html)
  through [icu-transliterator](https://github.com/longnow/node-icu-transliterator)
- [aromanize](https://github.com/fujaru/aromanize-js) for handling Korean Hangul
- [hangul-js](https://github.com/e-/Hangul.js) for handling Korean Hangul
- [pinyin-pro](https://github.com/zh-lx/pinyin-pro) for handling Pinyin (Chinese)
- [opencc](https://github.com/BYVoid/OpenCC) for handling Traditional Chinese, Simplified Chinese and Japanese
  Kanji (Shinjitai)
- [kuroshiro](https://github.com/hexenq/kuroshiro) for handling Japanese Hiragana and Katakana
- [kuroshiro-analyzer-kuromoji](https://github.com/hexenq/kuroshiro-analyzer-kuromoji) for handling Japanese
  Hiragana and Katakana
- [hanviet-pinyin-words](https://github.com/ph0ngp/hanviet-pinyin-words) for handling Vietnamese
- [phonemize](https://github.com/hans00/phonemize) for converting some languages to IPA
- [ipa-dict](https://github.com/open-dict-data/ipa-dict) for Arabic-IPA dictionary
