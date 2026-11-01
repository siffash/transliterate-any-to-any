export const enIpaJaRules = `
::Null;

[ˈˌ] [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* { ɨ } [ˈˌ]? [aeiouæɑɒɔəɛɜɪʊʌɐ] > i;
[ˈˌ] [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* { ɨ } > iː;
ɨ > i;
[aeiouæɑɒɔəɛɜɪʊʌɐ] [ˈˌ]? { z } [ˈˌ]? [bɫ] > s;
[td] i { ː } [^[:L:][:M:]] > ;
ɹ ɫ { s } [^[:L:][:M:]] > z;
ˈ s? { k } æ > c;
ˈ { ɡ } æ > ɟ;

::Null;

ɫ } ɫ > ;
ɹ } ɹ > ;
m } m > ;
n } n > ;
f } f > ;
v } v > ;
z } z > ;
w } w > ;
b } b > ;
t } t [ˈˌ]? [əɔeʌ] n > t;
d } d [ˈˌ]? [əɔeʌ] n > d;
t } t [ˈˌ]? a n [^[:L:][:M:]] > t;
d } d [ˈˌ]? a n [^[:L:][:M:]] > d;
t } t [ɝɚ] > t;
t } t [aeiouæɑɒɔəɛɜɪʊʌɝɚɐɫ] > ;
d } d [aeiouæɑɒɔəɛɜɪʊʌɝɚɐɫ] > ;
ɡ } ɡ [aeiouæɑɒɔəɛɜɪʊʌɝɚɐɫ] > ;
ˈ [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* [aeiouæɑɒɔəɛɜɪʊʌɐ] { s } s [aeouæɑɒɔəɛɜʊʌɐ] > s;
s } s > ;
ˈ [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* [æɛɪʌɔɑʊ] { tʃ } s? [^[:L:][:M:]] > ttʃ;
ˈ [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* [æɛɪʌɔɑʊ] { dʒ } s? [^[:L:][:M:]] > dʒdʒ;
ˈ [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* [æɛɪʌɔɑʊ] { ʃ } s? [^[:L:][:M:]] > ʃʃ;
ˈ [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* [æɛɪʌɔɑʊ] { k } s? [^[:L:][:M:]] > kk;
ˈ [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* [æɛɪʌɔɑʊ] { p } s? [^[:L:][:M:]] > pp;
ˈ [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* [æɛɪʌɔɑʊ] { t } s? [^[:L:][:M:]] > tt;
ˈ [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* [æɛɪʌɔɑʊ] { k } ɫ [^[:L:][:M:]] > kk;
ˈ [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* [æɛɪʌɔɑʊ] { p } ɫ [^[:L:][:M:]] > pp;
ˈ [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* [æɛɪʌɔɑʊ] { s } ɫ [^[:L:][:M:]] > ss;

::Null;

[bcdfhjlɫmnpstvwzʃʒθðŋ] { j } [aə] > i;
[bcdfɡɟhjklɫmnpstvwzʃʒθðŋ] { j [ɝɚ] } [^[:L:][:M:]] > ia;
[bcdfɡɟhjklɫmnpstvwzʃʒθðŋ] { j oɹ } [^[:L:][:M:]] > ia;
a { [ɝɚ] } > ɪɹ;
[aeiouæɑɒɔəɛɜɪʊʌɐ] [bcdfɡɟhjklɫmnpstvwzʃʒθðŋ]+ { oɹ } [^[:L:][:M:]] > aː;
ai ɹ } [bcdfɡɟhjklɫmnpstvwzʃʒθðŋˈˌ] > ea;
ai ɹ } [^[:L:][:M:]] > ea;
[ɝɚ] } ɹ > a;
[ɝɚ] } [aeiouæɑɒɔəɛɜɪʊʌɐɝɚ] > aɹ;
[ɝɚ] > aː;
[ʊu] ɹ } [bcdfɡɟhjklɫmnpstvwzʃʒθðŋˈˌ] > aː;
i [ˈˌ]? ɛ { ɹ } [^[:L:][:M:]] > ːɹ;
[ɛe] { ɹ } [bcdfɡɟhjklɫmnpstvwzʃʒθðŋˈˌ] > ɹ;
[ɔo] { ɹ } [^[:L:][:M:]] > a;
[ɑaæʌɒɔoə] { ɹ } [bcdfɡɟhjklɫmnpstvwzʃʒθðŋˈˌ] > ː;
[ɑaæʌɒɔoə] { ɹ } [^[:L:][:M:]] > ː;
[ɪiɛeʊu] { ɹ } [bcdfɡɟhjklɫmnpstvwzʃʒθðŋˈˌ] > a;
[ɪiɛeʊu] { ɹ } [^[:L:][:M:]] > a;

::Null;

k } k [ˈˌ]? [st] > ;
k } k [eɛ] > ;
[bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ] [ˈˌ]? { k } k > ;
[ˈˌ] [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* { u } [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ] [ij] [ˈˌ]? [aeiouæɑɒɔəɛɜɪʊʌɐ] > u;
[ˈˌ] [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* { y } [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ] [ij] [ˈˌ]? [aeiouæɑɒɔəɛɜɪʊʌɐ] > y;
[ˈˌ] [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* { u } [ˈˌ]? [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ] > uː;
[ˈˌ] [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* { u } [^[:L:][:M:]] > uː;
[ˈˌ] [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* { y } [ˈˌ]? [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ] > yː;
[ˈˌ] [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* { y } [^[:L:][:M:]] > yː;
[ˈˌ] [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* { oʊː } > oː;
[ˈˌ] [bcdfɡɟhjklɫmnpɹstvwzʃʒθðŋ]* { oʊ } > oː;
`;
