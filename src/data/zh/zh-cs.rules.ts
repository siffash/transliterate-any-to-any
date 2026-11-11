export const zhCsRules = `
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

ying > jing;
yin > jin;
yi > i;
yang > jang;
yan > jen;
y > j;

zhi > č’;
chi > čch’;
shi > š’;
ri > ž’;
zi > c’;
ci > cch’;
si > s’;

iang > iang;
ian > ien;
iong > iung;
ong > ung;
iu > iou;
ui > uej;
ai > aj;
ei > ej;
er > er;
ng > ng;

zh > č;
ch > čch;
sh > š;
b > p;
p > pch;
d > t;
t > tch;
g > k;
k > kch;
h > ch;
j > ť;
q > čch;
x > s;
r > ž;
z > c;
c > cch;

['’‘\`´ʼ] > '‧';

::Title;

::Null;

'‧' > '-';
`;
