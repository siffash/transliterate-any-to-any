# Transliterating to Latin-Script Languages

The library re-spells a name by the target language's own spelling rules ([orthographic transcription](https://en.wikipedia.org/wiki/Orthographic_transcription)). Real usage differs: many Latin-script languages simply keep the English romanization for names from some scripts. This page shows which form each language actually uses, based on Wikipedia article titles.

## Latin → Latin

Most Latin-script languages keep a Latin-script name unchanged (Bordeaux, Łódź, Stuttgart). Only these languages re-spell it:

| Target | Example                                  |
| ------ | ---------------------------------------- |
| `az`   | Bordeaux → Bordo, Stuttgart → Ştutqart   |
| `lt`   | Bordeaux → Bordo, Stuttgart → Štutgartas |
| `lv`   | Bordeaux → Bordo, Stuttgart → Štutgarte  |
| `sq`   | Bordeaux → Bordo, Stuttgart → Shtutgarti |
| `sr`   | Bordeaux → Bordo, Stuttgart → Štutgart   |

For any other Latin target, keep the text as it is (see _Skip Same-Script Pairs_ in the [README](../README.md)).

## Non-Latin → Latin

Each cell says which output to use for a source language **S** and a target language **T**:

- **EN**: the English romanization, i.e. the library's `S → en` output (Pinyin, Hepburn, Revised Romanization, etc.). Example: Chengdu stays _Chengdu_ in German.
- **own**: the target's own spelling, i.e. the library's `S → T` output. Example: Chelyabinsk becomes _Tscheljabinsk_ in German.

| Target | ru uk bg mk kk | tg  | ar fa | hi bn ur | zh  | ja ko | th  | el  | he  | ka  | hy  |
| ------ | -------------- | --- | ----- | -------- | --- | ----- | --- | --- | --- | --- | --- |
| `az`   | own            | own | own   | own      | own | own   | own | own | own | own | own |
| `bs`   | own            | own | EN    | EN       | EN  | EN    | EN  | own | own | own | own |
| `ca`   | own            | EN  | EN    | EN       | EN  | EN    | EN  | own | EN  | own | own |
| `cs`   | own            | own | own   | own      | own | own   | EN  | EN  | own | own | own |
| `da`   | own            | EN  | EN    | EN       | EN  | EN    | EN  | EN  | EN  | own | EN  |
| `de`   | own            | own | EN    | EN       | EN  | EN    | EN  | EN  | EN  | own | own |
| `es`   | own            | EN  | EN    | EN       | EN  | EN    | EN  | EN  | EN  | own | EN  |
| `et`   | own            | own | EN    | EN       | EN  | EN    | EN  | EN  | EN  | own | own |
| `fi`   | own            | own | EN    | EN       | EN  | EN    | EN  | EN  | EN  | own | own |
| `fr`   | own            | EN  | EN    | EN       | EN  | EN    | EN  | EN  | EN  | own | EN  |
| `hr`   | own            | own | EN    | EN       | EN  | EN    | EN  | own | own | own | own |
| `hu`   | own            | own | own   | own      | own | own   | EN  | own | own | own | own |
| `id`   | EN             | EN  | EN    | EN       | EN  | EN    | EN  | EN  | EN  | EN  | EN  |
| `is`   | EN             | own | EN    | EN       | EN  | EN    | EN  | own | EN  | own | own |
| `it`   | own            | EN  | EN    | EN       | EN  | EN    | EN  | EN  | EN  | EN  | EN  |
| `lb`   | own            | own | EN    | EN       | EN  | EN    | EN  | EN  | EN  | own | own |
| `lt`   | own            | own | own   | own      | own | own   | own | own | own | own | own |
| `lv`   | own            | own | own   | own      | own | own   | own | own | own | own | own |
| `ms`   | EN             | EN  | EN    | EN       | EN  | EN    | EN  | EN  | EN  | EN  | EN  |
| `mt`   | EN             | EN  | EN    | EN       | EN  | EN    | EN  | EN  | EN  | EN  | EN  |
| `nl`   | own            | own | EN    | EN       | EN  | EN    | EN  | EN  | EN  | own | own |
| `no`   | own            | EN  | EN    | EN       | EN  | EN    | EN  | EN  | EN  | own | own |
| `pl`   | own            | own | own   | EN       | EN  | EN    | EN  | own | own | own | own |
| `pt`   | EN             | EN  | EN    | EN       | EN  | EN    | EN  | EN  | EN  | EN  | EN  |
| `ro`   | own            | own | EN    | EN       | EN  | EN    | EN  | EN  | EN  | own | own |
| `sk`   | own            | own | own   | own      | own | own   | EN  | EN  | own | own | own |
| `sl`   | own            | EN  | own   | own      | own | own   | EN  | own | own | own | own |
| `sq`   | own            | own | own   | own      | EN  | EN    | EN  | own | EN  | EN  | EN  |
| `sr`   | own            | own | own   | own      | own | own   | own | own | own | own | own |
| `sv`   | own            | own | EN    | EN       | EN  | EN    | EN  | EN  | EN  | own | own |
| `tr`   | own            | own | own   | EN       | EN  | EN    | EN  | own | own | own | own |
| `vi`   | EN             | EN  | EN    | EN       | own | EN    | EN  | EN  | EN  | EN  | EN  |

### How it was checked

The table was built from Wikipedia article titles of about 160,000 native names (places and people) in 52 language editions. For every name whose `S → T` output differs from its `S → en` output, the target's article title was compared word by word with both outputs (ignoring accents and stress marks), and the name counted toward the form it matched. Places count twice as much as people. A cell is **EN** when at least 60% of the weighted votes match the English romanization and **own** when at most 40% do. Cells with split votes or fewer than 15 names were decided by reviewing the examples one by one: well-known places first, then consistency with the target's other columns and with a closely related language (`bs` → `hr`, `lb` → `de`). Exonyms and translated titles (Corfu, Tibet, Mount Everest) are ignored.
