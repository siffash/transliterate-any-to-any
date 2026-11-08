export const jaEnRules = `
０ > 0;
１ > 1;
２ > 2;
３ > 3;
４ > 4;
５ > 5;
６ > 6;
７ > 7;
８ > 8;
９ > 9;

::Null;

[[:Hiragana:][:Katakana:][:Han:]ー] > ;

::Null;
::NFC;

[^[:L:][:M:]] { ['’‘\`´ʼ] > ;
['’‘\`´ʼ] } [^[:L:][:M:]] > ;

[āâ] > a;
[īî] > i;
[ūû] > u;
[ēê] > e;
[ōô] > o;

･ > ' ';



::Null;

w { w+ > ;
y { y+ > ;
ch { h > h;
h { h+ > ;
[^[:L:][:M:]] { c+ } k > ;

k { k+ } h > ;
g { g+ } h > ;

::Title;
`;
