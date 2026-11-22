export const itIpaJaRules = `
::Null;

ʎ ː? } [aou] > li;
ʎː > ʎ;
ɲː > ɲ;

::Null;

[^[:L:][:M:]] mil { a } no [^[:L:][:M:]] > a;
[^[:L:][:M:]] tor { i } no [^[:L:][:M:]] > i;
a { ([ou]) } [[:L:][:M:]-[aeiou]] [aeiou] [^[:L:][:M:]] > $1;
[uw] { ([eio]) } [[:L:][:M:]-[aeiou]] [aeiou] [^[:L:][:M:]] > $1;
[^[:L:][:M:]] stef { a } no [^[:L:][:M:]] > a;
[aeiou] [[:L:][:M:]-[aeiou]]* { o } mo [^[:L:][:M:]] > o;
[aeiou] [[:L:][:M:]-[aeiou]]* { o } l [oi] [^[:L:][:M:]] > o;
[aeiou] [[:L:][:M:]-[aeiou]]* { e } [lr] [oe] [^[:L:][:M:]] > e;
[aeiou] [[:L:][:M:]-[aeiou]]* { i } [kmd] [oe] [^[:L:][:M:]] > i;
[aeiou] [[:L:][:M:]-[aeiou]]* { a } ri [^[:L:][:M:]] > a;
[aeiou] [[:L:][:M:]-[aeiou]]* { o } va [^[:L:][:M:]] > o;
[aeiou] [[:L:][:M:]-[aeiou]]* { ([aeiou]) } [bdfgklmnprstvzʎɲʃ] [aeiou] [^[:L:][:M:]] > $1ː;
[aeiou] [[:L:][:M:]-[aeiou]]* { ([aeiou]) } ts [aeiou] [^[:L:][:M:]] > $1ː;
`;
