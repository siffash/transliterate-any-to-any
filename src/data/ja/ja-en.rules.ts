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

以 > i;
予 > yo;
[亡剖] > bo;
[交勾] > ko;
企 > ki;
伺 > shi;
侶 > ryo;
促 > soku;
[俸倣] > ho;
倹 > ken;
偶 > gu;
備 > bi;
傲 > go;
傾 > kei;
冗 > jo;
凡 > bon;
刹 > satsu;
剥 > haku;
励 > rei;
劾 > gai;
匿 > toku;
受 > ju;

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
i { i+ } [^[:L:][:M:]] > ;
[^[:L:][:M:]] { c+ } k > ;

::Null;

k { k+ } h > ;
g { g+ } h > ;

::Title;
`;
