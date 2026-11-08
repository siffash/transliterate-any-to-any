export const jaLatnRules = `
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

::Null;

tch } e > čč;
cch } e > čč;
tch > ćć;
cch > ćć;
ssh > šš;
sh > š;
ch } e > č;
ch > ć;
ny > ń;
jj } e > ǯǯ;
j } e > ǯ;
j > đ;
e { i > j;

::Null;

n } ń > ń;
e } j > i;

ts > c;

･ > ' ';

::Title;
`;
