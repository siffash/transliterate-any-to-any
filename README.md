# 🔄 transliterate-any-to-any

A JavaScript/TypeScript library for [transliteration](https://en.wikipedia.org/wiki/Transliteration) (not translation) from any language to any language (see the [list of the supported languages](#supported-languages)).

### Most suitable for transliteration of proper nouns

- Place names, toponyms (e.g. names of cities, neighborhoods, towns, villages, streets, rivers, mountains, etc.)
- Personal names, anthroponyms (e.g. first names, middle names, last names, nicknames, names of pets, etc.)
- Business names (e.g. company or organization names, brand names, trademarks, etc.)

### Features

- Loads only the libraries/mappings/rules needed for the given transliteration
- Supports batching - you can pass an array of strings
- Transliterates even between languages of the same script (see [Maltese to Latvian example](#example-mt-to-lv))
- Turbo mode available - [by installing icu4c](#turbo-mode)
- Can work in browser (but not recommended because it's too heavy)

## 💡 Examples

```typescript
// Greek -> Armenian
await transliterate("Λάρισα", { from: "el", to: "hy" }); // -> Լարիսա
```

```typescript
// Bulgarian -> Czech
await transliterate("Копривщица", { from: "bg", to: "cs" }); // -> Koprivštica
```

```typescript
// French -> Russian
await transliterate("Pierre Richard", { from: "fr", to: "ru" }); // -> Пьер Ришар
```

<a id="example-mt-to-lv"></a>

```typescript
// Maltese -> Latvian
await transliterate("Marsaxlokk", { from: "mt", to: "lv" }); // -> Marsašlok
```

```typescript
// Japanese -> Arabic
await transliterate("青森", { from: "ja", to: "ar" }); // -> اوموري
```

```typescript
// Mandarin Chinese -> English
await transliterate("上海", { from: "zh", to: "en" }); // -> Shanghai
```

```typescript
// Mandarin Chinese -> Bulgarian
await transliterate(["上海", "广州"], { from: "zh", to: "bg" }); // -> ["Шанхай", "Гуанджоу"]
```

## 📖 API Reference

### `transliterate(text, options): string | string[]`

| Parameter | Type                 | Required | Description             |
| --------- | -------------------- | -------- | ----------------------- |
| `text`    | `string \| string[]` | Yes      | Input string or strings |
| `options` | `object`             | Yes      | Options - see below     |

#### Options

| Object property | Type     | Required | Description                                                                  |
| --------------- | -------- | -------- | ---------------------------------------------------------------------------- |
| `from`          | `string` | Yes      | Input language in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag)  |
| `to`            | `string` | Yes      | Output language in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) |

<a id="turbo-mode"></a>

## 🚀️ Prerequisites for enabling Turbo mode

- You need to have `pkg-config` (`brew install pkg-config`)
- You need to have ICU (`brew install icu4c`)
- You need to have ICU added to the `pkg-config` path (e.g. `echo 'export PKG_CONFIG_PATH="/opt/homebrew/opt/icu4c@78/lib/pkgconfig"' >> ~/.zshrc` for macOS)

<a id="supported-languages"></a>

## 🌍 Supported languages

| English name     | [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) | [ISO 15924 script](https://en.wikipedia.org/wiki/ISO_15924) | Countries where it's mostly used                                      |
| ---------------- | --------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| Mandarin Chinese | zh                                                        | Hani (Hanzi+Kanji+Hanja)                                    | China, Taiwan, Singapore                                              |
| Japanese         | ja                                                        | Jpan (Hira+Kana+Han)                                        | Japan                                                                 |
| Korean           | ko                                                        | Kore (Hangul)                                               | South Korea, North Korea                                              |
| Hindi            | hi                                                        | Deva                                                        | India                                                                 |
| Bengali          | bn                                                        | Beng                                                        | Bangladesh, India                                                     |
| Urdu             | ur                                                        | Arab                                                        | Pakistan, India                                                       |
| Persian          | fa                                                        | Arab                                                        | Iran, Afghanistan                                                     |
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
| Malay            | ms                                                        | Latn                                                        | Malaysia, Brunei, Singapore                                           |
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

## 📦 Third-party libraries used

- [pinyin-pro](https://github.com/zh-lx/pinyin-pro) for handling Pinyin (Chinese)
- [opencc-js](https://github.com/nk2028/opencc-js) for handling Traditional & Simplified Chinese & Japanese Kanji (Shinjitai)
- [kuroshiro](https://github.com/hexenq/kuroshiro) for handling Japanese Hiragana & Katakana
- [kuroshiro-analyzer-kuromoji](https://github.com/hexenq/kuroshiro-analyzer-kuromoji) for handling Japanese Hiragana & Katakana
- [aromanize](https://github.com/fujaru/aromanize-js) for handling Korean Hangul
- [hangul-js](https://github.com/e-/Hangul.js) for handling Korean Hangul
- [hanviet-pinyin-words](https://github.com/ph0ngp/hanviet-pinyin-words) for handling Vietnamese
- [phonemize](https://github.com/hans00/phonemize) for converting some languages to IPA
- [ipa-dict](https://github.com/open-dict-data/ipa-dict) for IPA dictionaries
- [ICU](https://icu.unicode.org/)'s [Transforms](https://unicode-org.github.io/icu/userguide/transforms/) through [icu-transliterator](https://github.com/longnow/node-icu-transliterator)
