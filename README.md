<div align="center">

# transliterate-any-to-any

A TypeScript library for [orthographic transcription](https://en.wikipedia.org/wiki/Orthographic_transcription) between [52 languages](#supported-languages)

###### 🚀 [Playground](https://transliterate-any-to-any.js.org) · 📦 [npm package](https://www.npmjs.com/package/transliterate-any-to-any) · 📖 [Read the article](https://realpandablog.wordpress.com/2026/09/03/transliterate-any-to-any/)

</div>

---

### Most suitable for proper nouns:

- Geographical names, toponyms (e.g. names of cities, neighborhoods, streets, villages, rivers, mountains, etc.)
- People names, anthroponyms (e.g. first / middle / last names, nicknames, pseudonyms, names of pets, etc.)
- Business names, ergonyms (e.g. names of companies, organizations, institutions, brands, trademarks, etc.)

### Features:

- Supports any language pair from the [supported languages list](#supported-languages). This includes converting between languages of same script (see [Maltese to Latvian example](#examples)).
- Based on rules & dictionaries, no machine learning overhead.
- Always produces the same output for the given input. The results are consistent, no risk of AI hallucinations.
- Dynamically imports only the libraries/mappings/rules/dictionaries needed for the given language pair.
- Supports batching - you can pass an array of strings.
- Works in browser - but it's recommended to be used in a Web Worker (see the [demo implementation](https://github.com/siffash/transliterate-any-to-any/tree/main/demo)).

<a id="examples"></a>

## 💡 Examples

```typescript
import { transliterate } from "transliterate-any-to-any";

// Maltese → Latvian
await transliterate("Marsaxlokk", { from: "mt", to: "lv" }); // → Marsašlok

// French → Russian
await transliterate("Pierre Richard", { from: "fr", to: "ru" }); // → Пьер Ришар

// English → Korean
await transliterate("Sean Connery", { from: "en", to: "ko" }); // → 숀 코너리

// Greek → Armenian
await transliterate("Λάρισα", { from: "el", to: "hy" }); // → Լարիսա

// Bulgarian → Czech
await transliterate("Копривщица", { from: "bg", to: "cs" }); // → Koprivštica

// Japanese → Arabic
await transliterate("青森", { from: "ja", to: "ar" }); // → اوموري

// Korean → English
await transliterate(["서울", "부산"], { from: "ko", to: "en" }); // → ["Seoul", "Busan"]

// Chinese → Bulgarian
await transliterate(["上海", "广州"], { from: "zh", to: "bg" }); // → ["Шанхай", "Гуанджоу"]

// Hindi → Hebrew
await transliterate(["मुंबई", "कोलकाता"], { from: "hi", to: "he" }); // → ["קולקטה" ,"מומבאי"]
```

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

## 🔍 Detect Language

If you don't know the source language in advance, you can guess it from the letters/characters of the source text with the function `detectLanguage`:

```typescript
import { detectLanguage } from "transliterate-any-to-any";

detectLanguage("თბილისი"); // → "ka"
detectLanguage("Київ"); // → "uk"
detectLanguage("Müller"); // → "de"
detectLanguage(["東京", "みやざき"]); // → "ja"
detectLanguage("123"); // → undefined (no letters)
detectLanguage("Иван Ivan"); // → throws an error (mixed scripts)
```

When the text could belong to several languages, it falls back to the most common one:

- Chinese `zh` over Japanese `ja`;
- Arabic `ar` over Persian `fa` & Urdu `ur`;
- Russian `ru` over Ukrainian `uk`, Bulgarian `bg`, Macedonian `mk`, Kazakh `kk` & Tajik `tg`;
- English `en` over other Latin-script languages; then German `de`, French `fr`, Spanish `es` & Turkish `tr` over the rest.

It returns `undefined` if the text has no letters or contains letters that no supported language uses, and throws an error if the text mixes letters of different languages.

## ⏭️ Skip Same-Script Pairs

By default, the library transliterates text even when the source & target languages use the same script (see the [Maltese to Latvian example](#examples)). To keep the text unchanged for such pairs, compare the languages' scripts before calling `transliterate`:

```typescript
import { languages } from "transliterate-any-to-any";

if (languages[sourceLanguage]?.script !== languages[targetLanguage]?.script) {
  await transliterate(text, { from: sourceLanguage, to: targetLanguage });
}
```

See also: [Transliterating to Latin-Script Languages](https://github.com/siffash/transliterate-any-to-any/tree/main/docs/transliterating-to-latin.md).

## ✅ Validate Language

By default, the library validates the source text against the source language. This is done by checking if the source text contains only the letters/characters from the language's alphabet/script:

```typescript
await transliterate("ლევან", { from: "en", to: "zh" }); // → throws an error
```

If you need to do it yourself, you can use the function `validateLanguage`:

```typescript
import { validateLanguage, languages } from "transliterate-any-to-any";

if (!validateLanguage("en", "ლევან")) {
  throw new Error(`The text does not match ${languages["en"].name}.`);
}
```

<a id="supported-languages"></a>

## 🌍 Supported Languages

| English name  | [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) | [ISO 15924 script](https://en.wikipedia.org/wiki/ISO_15924) | Countries where it's mostly used                                      |
| ------------- | --------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| Chinese       | zh                                                        | Hani (Hanzi+Kanji+Hanja)                                    | China, Taiwan, Singapore                                              |
| Japanese      | ja                                                        | Jpan (Hira+Kana+Han)                                        | Japan                                                                 |
| Korean        | ko                                                        | Kore (Hangul)                                               | South Korea, North Korea                                              |
| Thai          | th                                                        | Thai                                                        | Thailand, Cambodia, Myanmar                                           |
| Hindi         | hi                                                        | Deva                                                        | India                                                                 |
| Bengali       | bn                                                        | Beng                                                        | Bangladesh, India                                                     |
| Arabic        | ar                                                        | Arab                                                        | Saudi Arabia, UAE, Egypt, many Middle Eastern/North African countries |
| Persian       | fa                                                        | Arab                                                        | Iran, Afghanistan                                                     |
| Urdu          | ur                                                        | Arab                                                        | Pakistan, India                                                       |
| Hebrew        | he                                                        | Hebr                                                        | Israel                                                                |
| Georgian      | ka                                                        | Geor                                                        | Georgia                                                               |
| Armenian      | hy                                                        | Armn                                                        | Armenia, Russia, Georgia, France                                      |
| Greek         | el                                                        | Grek                                                        | Greece, Cyprus                                                        |
| Russian       | ru                                                        | Cyrl                                                        | Russia, Belarus, Kazakhstan, Kyrgyzstan, Ukraine                      |
| Ukrainian     | uk                                                        | Cyrl                                                        | Ukraine                                                               |
| Bulgarian     | bg                                                        | Cyrl                                                        | Bulgaria                                                              |
| Macedonian    | mk                                                        | Cyrl                                                        | North Macedonia                                                       |
| Kazakh        | kk                                                        | Cyrl                                                        | Kazakhstan, Russia                                                    |
| Tajik         | tg                                                        | Cyrl                                                        | Tajikistan, Uzbekistan                                                |
| English       | en                                                        | Latn                                                        | United Kingdom, Ireland, Malta                                        |
| German        | de                                                        | Latn                                                        | Germany, Austria, Switzerland, Belgium, Luxembourg, Liechtenstein     |
| French        | fr                                                        | Latn                                                        | France, Belgium, Switzerland, Luxembourg                              |
| Spanish       | es                                                        | Latn                                                        | Spain, Andorra                                                        |
| Turkish       | tr                                                        | Latn                                                        | Turkey, Cyprus (Turkish community)                                    |
| Azerbaijani   | az                                                        | Latn                                                        | Azerbaijan, Russia, Georgia                                           |
| Serbian       | sr                                                        | Latn                                                        | Serbia, Bosnia and Herzegovina, Montenegro, Kosovo                    |
| Croatian      | hr                                                        | Latn                                                        | Croatia, Bosnia and Herzegovina                                       |
| Bosnian       | bs                                                        | Latn                                                        | Bosnia and Herzegovina                                                |
| Catalan       | ca                                                        | Latn                                                        | Spain (Catalonia, Valencia, Balearic Islands), Andorra                |
| Czech         | cs                                                        | Latn                                                        | Czech Republic                                                        |
| Danish        | da                                                        | Latn                                                        | Denmark                                                               |
| Estonian      | et                                                        | Latn                                                        | Estonia                                                               |
| Finnish       | fi                                                        | Latn                                                        | Finland                                                               |
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
| Swedish       | sv                                                        | Latn                                                        | Sweden, Finland                                                       |
| Vietnamese    | vi                                                        | Latn                                                        | Vietnam                                                               |

## 📦 Third-Party Libraries Used

- [pinyin-pro](https://github.com/zh-lx/pinyin-pro) - for handling Chinese Pinyin
- [jieba-wasm](https://github.com/fengkx/jieba-wasm) - for handling Chinese word segmentation (needs WebAssembly: where it can't run, Chinese falls back to the JS engine's `Intl.Segmenter`, with a console warning)
- [opencc-js](https://github.com/nk2028/opencc-js) - for handling Traditional & Simplified Chinese & Japanese Kanji (Shinjitai)
- [kuroshiro](https://github.com/hexenq/kuroshiro), [kuroshiro-analyzer-kuromoji](https://github.com/hexenq/kuroshiro-analyzer-kuromoji), [kuromoji](https://github.com/takuyaa/kuromoji.js) - for handling Japanese Hiragana & Katakana (patched for browser compatibility)
- [aromanize](https://github.com/fujaru/aromanize-js) - for handling Korean Hangul (patched for browser compatibility)
- [hangul-js](https://github.com/e-/Hangul.js) - for handling Korean Hangul
- [thai-romanization](https://github.com/Pcampus-Studio/Pcampus-thai-romanization) - for handling Thai
- [hanviet-pinyin-words](https://github.com/ph0ngp/hanviet-pinyin-words) - for handling Vietnamese
- [phonemize](https://github.com/hans00/phonemize) - for converting some languages to IPA
- [icu-transliterator](https://github.com/longnow/node-icu-transliterator) - for verifying the JS implementation of [ICU](https://icu.unicode.org/)'s [RuleBasedTransliterator (RBT)](https://unicode-org.github.io/icu/userguide/transforms/)
