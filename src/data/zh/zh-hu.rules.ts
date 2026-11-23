export const zhHuRules = `
::NFC;

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

[:Han:] > ;

::Null;

[āáǎàɑɐæ] > a;
[ēéěèêếềễệ] > e;
[īíǐì] > i;
[ōóǒò] > o;
[ūúǔù] > u;
[ǖǘǚǜv] > ü;
[ńňǹ] > n;
ḿ > m;

[^[:L:][:M:]] { ['’‘\`´ʼ] > ;
['’‘\`´ʼ] } [^[:L:][:M:]] > ;

::Null;

[jqxy] { u > ü;

::Null;

yang > jang;
yan > jen;
y > j;
w > v;

[zc] hi > cse;
shi > si;
ri > zsi;
[zc] i > ce;
si > sze;

[zc] he } [^[:L:][:M:]] > csö;
she } [^[:L:][:M:]] > sö;
re } [^[:L:][:M:]] > zsö;
[zc] e } [^[:L:][:M:]] > cö;
se } [^[:L:][:M:]] > szö;
[dt] e } [^[:L:][:M:]] > tö;
ne } [^[:L:][:M:]] > nö;
le } [^[:L:][:M:]] > lö;
me } [^[:L:][:M:]] > mö;
[gk] e } [^[:L:][:M:]] > ko;
he } [^[:L:][:M:]] > ho;
[^[:L:][:M:]] { e } [^[:L:][:M:]] > o;

[gk] uo > kuo;
huo > huo;
shuo > suo;
uo > o;

iang > iang;
ian > ien;
ong > ung;
ui > uj;
ai > aj;
ei > ej;
er > er;
ng > ng;

[zc] h > cs;
sh > s;
b > p;
d > t;
g > k;
[jq] > cs;
x > hsz;
r > zs;
z > c;
s > sz;

['’‘\`´ʼ] > ;

::Title;

'‧' > '-';
`;
