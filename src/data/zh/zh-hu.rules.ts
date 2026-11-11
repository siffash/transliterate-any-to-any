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

zhi > cse;
chi > cse;
shi > si;
ri > zsi;
zi > ce;
ci > ce;
si > sze;

zhe } [^[:L:][:M:]] > csö;
che } [^[:L:][:M:]] > csö;
she } [^[:L:][:M:]] > sö;
re } [^[:L:][:M:]] > zsö;
ze } [^[:L:][:M:]] > cö;
ce } [^[:L:][:M:]] > cö;
se } [^[:L:][:M:]] > szö;
de } [^[:L:][:M:]] > tö;
te } [^[:L:][:M:]] > tö;
ne } [^[:L:][:M:]] > nö;
le } [^[:L:][:M:]] > lö;
me } [^[:L:][:M:]] > mö;
ge } [^[:L:][:M:]] > ko;
ke } [^[:L:][:M:]] > ko;
he } [^[:L:][:M:]] > ho;
[^[:L:][:M:]] { e } [^[:L:][:M:]] > o;

guo > kuo;
kuo > kuo;
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

zh > cs;
ch > cs;
sh > s;
b > p;
d > t;
g > k;
j > cs;
q > cs;
x > hsz;
r > zs;
z > c;
s > sz;

['’‘\`´ʼ] > ;

::Title;

'‧' > '-';
`;
