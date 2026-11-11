export const koCsRules = `
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

[:Hangul:] > ;

::Null;

'_' eui > ui;
eui > ui;

yae > je;
yä > jä;
wae > we;
yeo > jo;
wa > wa;
we > we;
wo > wo;
wi > ü;
oe > ö;
yu > ju;
ya > ja;
ae > e;
eo > o;

ye > je;
yo > jo;
eu > u;

a > a;
e > e;
o > o;
u > u;
i > i;

kk > kk;
tt > tt;
pp > pp;
ss > ss;
jj > čč;
ch > čch;

k } [aeiouwyä] > kch;
t } [aeiouwyä] > tch;
p } [aeiouwyä] > pch;
k > k;
t > t;
p > p;
s > s;
h > h;

· { g > k;
[aeiouäöü] '‧' { g > g;
'‧' { g > k;
'․' { g > g;
[kpt] { g > k;
[^[:L:][:M:]] { g > k;
g > g;

· { d > t;
[aeiouäöü] '‧' { d > d;
'‧' { d > t;
'․' { d > d;
[kpt] { d > t;
[^[:L:][:M:]] { d > t;
d > d;

· { b > p;
[aeiouäöü] '‧' { b > b;
'‧' { b > p;
'․' { b > b;
[kpt] { b > p;
[^[:L:][:M:]] { b > p;
b > b;

· { j > č;
[aeiouäöü] '‧' { j > dž;
'‧' { j > č;
'․' { j > dž;
[kpt] { j > č;
[^[:L:][:M:]] { j > č;
j > dž;

ng > ng;
ll > ll;
l > l;
r > r;
m > m;
n > n;

'_' > ;

::Null;

[čž] { j > ;
čch { j > ;

[^[:L:][:M:]] { ['’‘\`´ʼ] } r > ;

· > ' ';

::Title;
`;
