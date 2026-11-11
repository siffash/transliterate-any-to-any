# Transliterating to Latin-Script Languages

The library re-spells a name by the target language's own spelling rules ([orthographic transcription](https://en.wikipedia.org/wiki/Orthographic_transcription)). Real usage differs: many Latin-script languages simply keep the English romanization for names from some scripts. This page shows which form each language actually uses, based on Wikipedia article titles.

## Latin → Latin

Most Latin-script languages keep a Latin-script name unchanged (Bordeaux, Łódź, Würzburg). Only these languages re-spell it:

| Target | Example                                  |
| ------ | ---------------------------------------- |
| `az`   | Bordeaux → Bordo, Würzburg → Vürtsburq   |
| `lt`   | Bordeaux → Bordo, Würzburg → Viurcburgas |
| `lv`   | Bordeaux → Bordo, Würzburg → Vircburga   |
| `sq`   | Bordeaux → Bordo, Chopin → Shopen        |
| `sr`   | Bordeaux → Bordo, Würzburg → Vircburg    |

For any other Latin target, keep the text as it is (see _Skip Same-Script Pairs_ in the [README](../README.md)).

## Non-Latin → Latin

Each cell says which output to use for a source language **S** and a target language **T**:

- **EN**: the English romanization, i.e. the library's `S → en` output (Pinyin, Hepburn, Revised Romanization, etc.). Example: Chengdu stays _Chengdu_ in German.
- **own**: the target's own spelling, i.e. the library's `S → T` output. Example: Chelyabinsk becomes _Tscheljabinsk_ in German.

| Target | ru uk bg mk kk | tg  | ar fa | hi bn ur | zh  | ja ko | th   | el   | he   | ka hy |
| ------ | -------------- | --- | ----- | -------- | --- | ----- | ---- | ---- | ---- | ----- |
| `az`   | own            | own | own   | own      | own | own   | own* | own  | own  | own   |
| `bs`   | own            | own | own   | EN       | EN  | EN    | EN   | own* | EN   | own   |
| `ca`   | own            | EN  | EN    | EN       | EN  | EN    | EN   | own  | own  | own   |
| `cs`   | own            | own | own   | own      | own | own   | own  | own  | own  | own   |
| `da`   | own            | EN  | EN    | EN       | EN  | EN    | EN   | EN   | EN   | own   |
| `de`   | own            | own | own   | EN       | EN  | EN    | EN   | EN   | own  | own   |
| `es`   | own            | EN  | own   | EN       | EN  | EN    | EN   | own  | EN   | own   |
| `et`   | own            | own | own   | EN       | EN  | EN    | EN   | own  | own  | own   |
| `fi`   | own            | own | EN    | EN       | EN  | EN    | EN   | own  | EN   | own   |
| `fr`   | own            | own | own   | EN       | EN  | EN    | EN   | own  | EN   | own   |
| `hr`   | own            | own | own   | EN       | EN  | EN    | EN   | own  | own  | own   |
| `hu`   | own            | own | own   | own      | own | own   | own  | own  | own  | own   |
| `id`   | EN             | EN  | EN    | EN       | EN  | EN    | EN   | EN   | EN   | EN    |
| `is`   | own            | own | EN    | EN       | EN  | EN    | EN   | own  | EN   | own   |
| `it`   | own            | own | EN    | EN       | EN  | EN    | EN   | EN   | EN   | EN    |
| `lb`   | own            | own | own   | EN       | EN  | EN    | EN   | EN   | own* | own   |
| `lt`   | own            | own | own   | own      | own | own   | own  | own  | own  | own   |
| `lv`   | own            | own | own   | own      | own | own   | own  | own  | own  | own   |
| `ms`   | EN             | EN  | EN    | EN       | EN  | EN    | EN   | EN   | EN   | EN    |
| `mt`   | EN             | EN  | own*  | EN*      | EN  | EN    | EN   | own* | EN   | EN    |
| `nl`   | own            | own | EN    | EN       | EN  | EN    | EN   | EN   | own  | own   |
| `no`   | own            | own | EN    | EN       | EN  | EN    | EN   | own  | EN   | own   |
| `pl`   | own            | own | own   | EN       | EN  | EN    | EN   | own  | own  | own   |
| `pt`   | own            | own | own   | EN       | EN  | EN    | EN   | own  | EN   | own   |
| `ro`   | own            | own | EN    | EN       | EN  | EN    | EN   | EN   | own  | own   |
| `sk`   | own            | own | own   | own      | own | own   | own  | own  | own  | own   |
| `sl`   | own            | own | own   | own      | own | own   | EN   | own  | own  | own   |
| `sq`   | own            | own | own   | own      | own | EN    | EN*  | own  | own  | own   |
| `sr`   | own            | own | own   | own      | own | own   | own  | own  | own  | own   |
| `sv`   | own            | own | EN    | EN       | EN  | EN    | EN   | EN   | EN   | own   |
| `tr`   | own            | own | own   | EN       | EN  | EN    | EN   | own  | own  | own   |
| `vi`   | EN             | EN  | EN    | EN       | own | EN    | EN   | EN   | EN   | EN    |

\* Little or no Wikipedia data: the value follows the same target's other columns or a closely related language (`bs` → `hr`, `lb` → `de`).

### How it was checked

For each source language, the Wikipedia titles of 10–20 places (big and small cities) and 5–8 well-known people were compared across all targets. A cell is **own** when names with letters the target spells differently (_sh_, _kh_, _ch_, _zh_, _j_, _y_, _x_, …) get re-spelled. Places outweigh people. Exonyms (Salonica, Peking) are ignored.
