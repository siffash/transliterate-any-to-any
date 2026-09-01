<div align="center">

# transliterate-any-to-any

A TypeScript library for [transliteration](https://en.wikipedia.org/wiki/Transliteration) (not translation) between [50 languages](#supported-languages)

###### 🚀 [Playground](https://transliterate-any-to-any.js.org) · 📦 [npm package](https://www.npmjs.com/package/transliterate-any-to-any) · 📖 [Read the article](https://dev.to/siffash/transliterate-any-to-any)

</div>

---

### Most suitable for transliteration of proper nouns:

- Place names, toponyms (e.g. names of cities, neighborhoods, towns, villages, streets, rivers, mountains, etc.).
- Personal names, anthroponyms (e.g. first names, middle names, last names, nicknames, names of pets, etc.).
- Business names (e.g. company or organization names, brand names, trademarks, etc.).

### Features:

- Transliterates any language pair from the [supported languages list](#supported-languages).
- Transliterates even between languages of same script (see [Maltese to Latvian example](#examples)).
- Based on rules & dictionaries, no machine learning overhead.
- Dynamically imports only the libraries/mappings/rules needed for the given language pair.
- Supports batching - you can pass an array of strings.
- Can work in browser - but it's recommended to be used in a Web Worker (see the [demo implementation](https://github.com/siffash/transliterate-any-to-any/tree/main/demo)).

---

<a id="examples"></a>

## 💡 Examples

```typescript
import { transliterate } from "transliterate-any-to-any";

// Maltese -> Latvian
await transliterate("Marsaxlokk", { from: "mt", to: "lv" }); // -> Marsašlok

// French -> Russian
await transliterate("Pierre Richard", { from: "fr", to: "ru" }); // -> Пьер Ришар

// Greek -> Armenian
await transliterate("Λάρισα", { from: "el", to: "hy" }); // -> Լարիսա

// Bulgarian -> Czech
await transliterate("Копривщица", { from: "bg", to: "cs" }); // -> Koprivštica

// Japanese -> Arabic
await transliterate("青森", { from: "ja", to: "ar" }); // -> اوموري

// Korean -> English
await transliterate(["서울", "부산"], { from: "ko", to: "en" }); // -> ["Seoul", "Busan"]

// Chinese -> Bulgarian
await transliterate(["上海", "广州"], { from: "zh", to: "bg" }); // -> ["Шанхай", "Гуанджоу"]

// Hindi -> Hebrew
await transliterate(["मुंबई", "कोलकाता"], { from: "hi", to: "he" }); // -> ["קולקטה" ,"מומבאי"]
```

---

## 🛠️ API Reference

### `transliterate(text, options): string | string[]`

| Parameter | Type                 | Required | Description                              |
| --------- | -------------------- | -------- | ---------------------------------------- |
| `text`    | `string \| string[]` | Yes      | Source text - string or array of strings |
| `options` | `object`             | Yes      | Options object - see below               |

#### Options

| Object property | Type     | Required | Description                                                                  |
| --------------- | -------- | -------- | ---------------------------------------------------------------------------- |
| `from`          | `string` | Yes      | Source language in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) |
| `to`            | `string` | Yes      | Target language in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) |

---

## 🔍 Detect Language's Script

By default, the library transforms the source text even if the source & target languages are of same script (see [Maltese to Latvian example](#examples)). If you want to prevent such cases, you can compare the languages' scripts before transliteration:

```typescript
import { languages } from "transliterate-any-to-any";

if (languages[languageFrom]?.script !== languages[languageTo]?.script) {
  await transliterate(text, { from: languageFrom, to: languageTo });
}
```

---

## ✅ Validate Language By Script

By default, the library validates the source text against the source language by checking the language's script:

```typescript
await transliterate("ლევან", { from: "en", to: "zh" }); // -> throws an error
```

If you need to do it yourself, you can use `validateLanguageByScript` function:

```typescript
import { validateLanguageByScript, languages } from "transliterate-any-to-any";

if (!validateLanguageByScript("en", "ლევან")) {
  throw new Error(`The text does not match ${languages["en"].name}.`);
}
```

---

<a id="supported-languages"></a>

## 🌍 Supported Languages

| English name  | [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) | [ISO 15924 script](https://en.wikipedia.org/wiki/ISO_15924) | Countries where it's mostly used                                      |
| ------------- | --------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| Chinese       | zh                                                        | Hani (Hanzi+Kanji+Hanja)                                    | China, Taiwan, Singapore                                              |
| Japanese      | ja                                                        | Jpan (Hira+Kana+Han)                                        | Japan                                                                 |
| Korean        | ko                                                        | Kore (Hangul)                                               | South Korea, North Korea                                              |
| Hindi         | hi                                                        | Deva                                                        | India                                                                 |
| Bengali       | bn                                                        | Beng                                                        | Bangladesh, India                                                     |
| Urdu          | ur                                                        | Arab                                                        | Pakistan, India                                                       |
| Persian       | fa                                                        | Arab                                                        | Iran, Afghanistan                                                     |
| Arabic        | ar                                                        | Arab                                                        | Saudi Arabia, UAE, Egypt, many Middle Eastern/North African countries |
| Hebrew        | he                                                        | Hebr                                                        | Israel                                                                |
| Georgian      | ka                                                        | Geor                                                        | Georgia                                                               |
| Armenian      | hy                                                        | Armn                                                        | Armenia, Russia, Georgia, France                                      |
| Greek         | el                                                        | Grek                                                        | Greece, Cyprus                                                        |
| Russian       | ru                                                        | Cyrl                                                        | Russia, Belarus, Kazakhstan, Kyrgyzstan, Ukraine                      |
| Kazakh        | kk                                                        | Cyrl                                                        | Kazakhstan (European part), Russia                                    |
| Ukrainian     | uk                                                        | Cyrl                                                        | Ukraine                                                               |
| Bulgarian     | bg                                                        | Cyrl                                                        | Bulgaria                                                              |
| Macedonian    | mk                                                        | Cyrl                                                        | North Macedonia                                                       |
| Azerbaijani   | az                                                        | Latn                                                        | Azerbaijan, Russia, Georgia                                           |
| Bosnian       | bs                                                        | Latn                                                        | Bosnia and Herzegovina                                                |
| Catalan       | ca                                                        | Latn                                                        | Spain (Catalonia, Valencia, Balearic Islands), Andorra                |
| Czech         | cs                                                        | Latn                                                        | Czech Republic                                                        |
| Danish        | da                                                        | Latn                                                        | Denmark                                                               |
| German        | de                                                        | Latn                                                        | Germany, Austria, Switzerland, Belgium, Luxembourg, Liechtenstein     |
| English       | en                                                        | Latn                                                        | United Kingdom, Ireland, Malta                                        |
| Spanish       | es                                                        | Latn                                                        | Spain, Andorra                                                        |
| Estonian      | et                                                        | Latn                                                        | Estonia                                                               |
| Finnish       | fi                                                        | Latn                                                        | Finland                                                               |
| French        | fr                                                        | Latn                                                        | France, Belgium, Switzerland, Luxembourg                              |
| Croatian      | hr                                                        | Latn                                                        | Croatia, Bosnia and Herzegovina                                       |
| Hungarian     | hu                                                        | Latn                                                        | Hungary                                                               |
| Indonesian    | id                                                        | Latn                                                        | Indonesia                                                             |
| Icelandic     | is                                                        | Latn                                                        | Iceland                                                               |
| Italian       | it                                                        | Latn                                                        | Italy, Switzerland, San Marino, Vatican City                          |
| Luxembourgish | lb                                                        | Latn                                                        | Luxembourg                                                            |
| Lithuanian    | lt                                                        | Latn                                                        | Lithuania                                                             |
| Latvian       | lv                                                        | Latn                                                        | Latvia                                                                |
| Malay         | ms                                                        | Latn                                                        | Malaysia, Brunei, Singapore                                           |
| Maltese       | mt                                                        | Latn                                                        | Malta                                                                 |
| Dutch         | nl                                                        | Latn                                                        | Netherlands, Belgium                                                  |
| Norwegian     | no                                                        | Latn                                                        | Norway                                                                |
| Polish        | pl                                                        | Latn                                                        | Poland                                                                |
| Portuguese    | pt                                                        | Latn                                                        | Portugal                                                              |
| Romanian      | ro                                                        | Latn                                                        | Romania, Moldova                                                      |
| Slovak        | sk                                                        | Latn                                                        | Slovakia                                                              |
| Slovene       | sl                                                        | Latn                                                        | Slovenia                                                              |
| Albanian      | sq                                                        | Latn                                                        | Albania, Kosovo, North Macedonia                                      |
| Serbian       | sr                                                        | Latn                                                        | Serbia, Bosnia and Herzegovina, Montenegro, Kosovo                    |
| Swedish       | sv                                                        | Latn                                                        | Sweden, Finland                                                       |
| Turkish       | tr                                                        | Latn                                                        | Turkey, Cyprus (Turkish community)                                    |
| Vietnamese    | vi                                                        | Latn                                                        | Vietnam                                                               |

---

## 📦 Third-Party Libraries Used

- [pinyin-pro](https://github.com/zh-lx/pinyin-pro) for handling Chinese Pinyin
- [opencc-js](https://github.com/nk2028/opencc-js) for handling Traditional & Simplified Chinese & Japanese Kanji (Shinjitai)
- [kuroshiro](https://github.com/hexenq/kuroshiro) for handling Japanese Hiragana & Katakana
- [kuroshiro-analyzer-kuromoji](https://github.com/hexenq/kuroshiro-analyzer-kuromoji) for handling Japanese Hiragana & Katakana (patched for browser compatibility)
- [aromanize](https://github.com/fujaru/aromanize-js) for handling Korean Hangul (patched for browser compatibility)
- [hangul-js](https://github.com/e-/Hangul.js) for handling Korean Hangul
- [hanviet-pinyin-words](https://github.com/ph0ngp/hanviet-pinyin-words) for handling Vietnamese
- [phonemize](https://github.com/hans00/phonemize) for converting some languages to IPA
- [icu-transliterator](https://github.com/longnow/node-icu-transliterator) for verifying the JS implementation of [ICU](https://icu.unicode.org/)'s [RuleBasedTransliterator (RBT)](https://unicode-org.github.io/icu/userguide/transforms/)
