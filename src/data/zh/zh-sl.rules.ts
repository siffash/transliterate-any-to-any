export const zhSlRules = `
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
yong > jong;
yuan > juan;
yue > jue;
yun > jun;
yao > jao;
yan > jan;
you > jov;
ya > ja;
ye > je;
yin > jin;
yi > ji;
yu > ju;
yo > jo;

wang > vang;
weng > veng;
wai > vaj;
wei > vei;
wan > van;
wen > ven;
wa > va;
wo > vo;
wu > vu;

jiang > džjang;
qiang > čjang;
xiang > šjang;
jiong > džiong;
qiong > čiong;
xiong > šiong;
jian > džjan;
qian > čjan;
xian > šjan;
jiao > džjao;
qiao > čjao;
xiao > šjao;
juan > džuan;
quan > čuan;
xuan > šuan;
jing > džing;
qing > čing;
xing > šing;
jia > džja;
qia > čja;
xia > šja;
jie > džje;
qie > čje;
xie > šje;
jiu > džju;
qiu > čju;
xiu > šju;
jin > džin;
qin > čin;
xin > šin;
jue > džue;
que > čue;
xue > šue;
jun > džun;
qun > čun;
xun > šun;
ji > dži;
qi > či;
xi > ši;
ju > džu;
qu > ču;
xu > šu;
jü > džu;
qü > ču;
xü > šu;

zhi > dži;
chi > či;
shi > ši;
zi > dzi;

iang > jang;
iong > iong;
uang > uang;
ueng > ueng;

ang > ang;
eng > eng;
ing > ing;
ong > ong;
ian > jan;
iao > jao;
uai > uaj;
uan > uan;
üan > juan;

ai > aj;
ei > ei;
ui > ui;
ao > ao;
ou > ov;
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
r > r;
z > dz;
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
j > dž;
q > č;
x > š;
w > v;
y > j;

a > a;
o > o;
e > e;
i > i;
u > u;
ü > ju;

['’‘\`´ʼ] > ;



::Null;

[^[:L:][:M:]] { i } [aeou] > j;
[aeou] { i > j;

ia > ija;
ie > ije;
io > ijo;
iu > iju;

::Null;

b { b+ > ;
c { c+ > ;
č { č+ > ;
d { d+ > ;
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

::Title;
`;
