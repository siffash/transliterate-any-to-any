export const zhSrRules = `
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

[^[:L:][:M:]] { ['’‘\`´ʼ] > ;
['’‘\`´ʼ] } [^[:L:][:M:]] > ;

::Null;

yang > jang;
ying > jing;
yong > jung;
yuan > juen;
yue > jue;
yun > jun;
yao > jao;
yan > jen;
you > jou;
ya > ja;
ye > je;
yin > jin;
yi > ji;
yu > ju;
yo > jo;

wang > vang;
weng > veng;
wai > vaj;
wei > vej;
wan > van;
wen > ven;
wa > va;
wo > vo;
wu > vu;

jiang > đang;
qiang > ćang;
xiang > sjang;
jiong > đung;
qiong > ćung;
xiong > sjung;
jian > đen;
qian > ćen;
xian > sjen;
jiao > đao;
qiao > ćao;
xiao > sjao;
juan > đuen;
quan > ćuen;
xuan > sjuen;
jing > đing;
qing > ćing;
xing > sing;
jia > đa;
qia > ća;
xia > sja;
jie > đe;
qie > će;
xie > sje;
jiu > đu;
qiu > ću;
xiu > sju;
jin > đin;
qin > ćin;
xin > sin;
jue > đue;
que > ćue;
xue > sjue;
jun > đun;
qun > ćun;
xun > sjun;
ji > đi;
qi > ći;
xi > si;
ju > đu;
qu > ću;
xu > sju;
jü > đu;
qü > ću;
xü > sju;

zhi > dži;
chi > či;
shi > ši;
ri > ži;
zi > ci;
ci > ci;
si > si;

hui > huej;

iang > jang;
iong > jung;
uang > uang;
ueng > ueng;

ang > ang;
eng > eng;
ing > ing;
ong > ung;
ian > jen;
iao > jao;
uai > uaj;
uan > uan;
üan > juen;

ai > aj;
ei > ej;
ui > uej;
ao > ao;
ou > ou;
iu > ju;
ie > je;
ia > ja;
in > in;
un > un;
ün > jun;
ua > ua;
uo > uo;
ue > ue;
üe > jue;
er > er;
an > an;
en > en;

ng > ng;

zh > dž;
ch > č;
sh > š;
r > ž;
z > c;
c > c;
s > s;
b > b;
p > p;
m > m;
f > f;
d > d;
t > t;
n > n;
l > l;
g > g;
k > k;
h > h;
j > đ;
q > ć;
x > s;
w > v;
y > j;

a > a;
o > o;
e > e;
i > i;
u > u;
ü > ju;

a { ['’‘\`´ʼ] } a > \\';
e { ['’‘\`´ʼ] } e > \\';
o { ['’‘\`´ʼ] } o > \\';
['’‘\`´ʼ] > ;



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
