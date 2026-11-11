export const koHuRules = `
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

seoul > szöul;

eui > i;

yae > je;
wae > ve;
yeo > jo;
wa > va;
we > ve;
wo > vo;
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
ss } i > ss;
ss > ssz;
jj > ccs;
ch > csh;

k } [aeiouwy] > kh;
t } [aeiouwy] > th;
p } [aeiouwy] > ph;
k > k;
t > t;
p > p;
s } i > s;
s > sz;
h > h;

[kpt] · { g > k;
· { g > g;
[kpt] { g > k;
'‧' { g > k;
[^[:L:][:M:]] { g > k;
g > g;

[kpt] · { d > t;
· { d > d;
[kpt] { d > t;
'‧' { d > t;
[^[:L:][:M:]] { d > t;
d > d;

[kpt] · { b > p;
· { b > b;
[kpt] { b > p;
'‧' { b > p;
[^[:L:][:M:]] { b > p;
b > b;

[kpt] · { j > cs;
· { j > dzs;
[kpt] { j > cs;
'‧' { j > cs;
[^[:L:][:M:]] { j > cs;
j > dzs;

ng > ng;
ll > ll;
l > l;
r > r;
m > m;
n > n;

'_' > ;

::Null;

cs { j > ;
zs { j > ;
csh { j > ;

[^[:L:][:M:]] { ['’‘\`´ʼ] } r > ;

· > ' ';

::Title;
`;
