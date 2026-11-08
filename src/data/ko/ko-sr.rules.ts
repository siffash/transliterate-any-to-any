export const koSrRules = `
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

seoul > seul;

[^[:L:][:M:]] { i } [^[:L:][:M:]] > li;

[čž] { yae > e;
[čž] { ya > a;
[čž] { yeo > o;
[čž] { yo > o;
[čž] { yu > u;
[čž] { ye > e;

[aeiou] { ui > ui;
[^[:L:][:M:]] { ui > ui;
ui > i;

'_' eui > ui;
[aeiou] { eui > ui;
[^[:L:][:M:]] { eui > ui;
eui > i;

yae > je;
wae > ve;
yeo > jo;
wa > va;
we > ve;
wo > vo;
wi > vi;
oe > ve;
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
ch > č;

k > k;
t > t;
p > p;
s > s;
h > h;

[kpt] · { g > g;
· { g > k;
[kptshč] { g > k;
[kptshč] '‧' { g > k;
'‧' { g > g;
'․' { g > g;
[^[:L:][:M:]] { g > k;
g > g;

· { d > d;
[kptshč] { d > t;
[kptshč] '‧' { d > t;
'‧' { d > d;
'․' { d > d;
[^[:L:][:M:]] { d > t;
d > d;

· { b > b;
[kptshč] { b > p;
[kptshč] '‧' { b > p;
'‧' { b > b;
'․' { b > b;
[^[:L:][:M:]] { b > p;
b > b;

· { j > dž;
[kptshč] { j > č;
[kptshč] '‧' { j > č;
'‧' { j > dž;
'․' { j > dž;
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

ji > i;
[aeiou] { j } e > ;

[^[:L:][:M:]] { j } [bcčćdđfghklmnprsštvzž] > i;
[bcčćdđfghklmnprsštvzž] { j } [^[:L:][:M:]] > i;
[bcčćdđfghklmnprsštvzž] { j } [bcčćdđfghklmnprsštvzž] > i;

[^[:L:][:M:]] { ['’‘\`´ʼ] } r > ;

· > ' ';



::Null;

a { a+ > ;
e { e+ > ;
i { i+ > ;
o { o+ > ;
u { u+ > ;
b { b+ > ;
c { c+ > ;
č { č+ > ;
ć { ć+ > ;
d { d+ > ;
đ { đ+ > ;
f { f+ > ;
g { g+ > ;
h { h+ > ;
j { j+ > ;
k { k+ > ;
l { l+ > ;
m { m+ > ;
n { n+ > ;
p { p+ > ;
r { r+ > ;
s { s+ > ;
š { š+ > ;
t { t+ > ;
v { v+ > ;
z { z+ > ;
ž { ž+ > ;

::Null;

dz { (dz)+ > ;
dž { (dž)+ > ;
lj { (lj)+ > ;
nj { (nj)+ > ;

::Null;

i { a > ja;
i { e > je;
i { u > ju;

::Title;
`;
