export const viThRules = `
::Lower;
::NFC;

[^[:L:][:M:]] { nguyễn } [^[:L:][:M:]] > เหงียน;
([àằầèềìòồờùừỳ]) > $1 F;
([áắấéếíóốớúứý]) > $1 S;
([ảẳẩẻểỉỏổởủửỷ]) > $1 R;
([ãẵẫẽễĩõỗỡũữỹ]) > $1 X;
([ạặậẹệịọộợụựỵ]) > $1 J;

::Null;

[àáảãạ] > a;
[ằắẳẵặ] > ă;
[ầấẩẫậ] > â;
[èéẻẽẹ] > e;
[ềếểễệ] > ê;
[ìíỉĩị] > i;
[òóỏõọ] > o;
[ồốổỗộ] > ô;
[ờớởỡợ] > ơ;
[ùúủũụ] > u;
[ừứửữự] > ư;
[ỳýỷỹỵ] > y;

::Null;

[^[:L:][:M:]] { ([[:Ll:]]+) ([FSRXJ]) > $2 $1;

::Null;

[^[:Ll:]] { gi } ê > zi;
[^[:Ll:]] { gi } [aăâeoôơuư] > z;
[^[:Ll:]] { gi > zi;
[^[:Ll:]] { qu > kw;
o } [aăe] > w;
u } ây > w;
u } [êy] > w;

::Null;

S } [bcdđghklmnprstvxzwfj]* [ăâ] [cpkt] > Z;
S } [bcdđghklmnprstvxzwfj]* uâ [cpt] > Z;
S } [bcdđghklmnprstvxzwfj]* a ch > Z;
S } [bcdđghklmnprstvxzwfj]* [iyuưoôê] [ck] > Z;
J } [bcdđghklmnprstvxzwfj]* [aăâeêioôơuưy]* [cpkt] > D;
J } [bcdđghklmnprstvxzwfj]* [aăâeêioôơuưy] [^[:Ll:]] > D;
J } [bcdđghklmnprstvxzwfj]* [iyuư] [aơ] [^[:Ll:]] > D;

::Null;

[JD] [bcdđghklmnprstvxzwfj]* { ([aeêioôơuưy]) } [bcdđghklmnprstvxzfj] > $1 q;
[JD] [bcdđghklmnprstvxzwfj]* { ([aeêioôơuưy]) } [^[:Ll:]] > $1 q;
[JD] [bcdđghklmnprstvxzwfj]* { a } [io] > aq;
[JD] [bcdđghklmnprstvxzwfj]* { ([iy]) } [au] > $1 q;

::Null;

[FJDRX] { ng } w > ง;
[FJDRX] { nh } w > ญ;
[FJDRX] { h } w > ฮ;
[FJDRX] { l } w > ล;
[FJDRX] { m } w > ม;
[FJDRX] { n } w > น;
[FJDRX] { v } w > ว;
[FJDRX] [ฮลมนงญว] { w > หว;
[ก-ฮ] { w > ว;
[FJDRX] { kh > ข;
[FJDRX] { th > ถ;
[FJDRX] { ph > ฝ;
[FJDRX] { ngh > หง;
[FJDRX] { ng > หง;
[FJDRX] { nh > หญ;
[FJDRX] { [dzrsx] > ส;
[FJDRX] { h > ห;
[FJDRX] { f > ฝ;
[FJDRX] { l > หล;
[FJDRX] { m > หม;
[FJDRX] { n > หน;
[FJDRX] { [vw] > หว;
[^[:Ll:]] { kh > ค;
[^[:Ll:]] { th > ท;
[^[:Ll:]] { ph > ฟ;
[^[:Ll:]] { ngh > ง;
[^[:Ll:]] { ng > ง;
[^[:Ll:]] { nh > ญ;
[^[:Ll:]] { ch > จ;
[^[:Ll:]] { tr > จ;
[^[:Ll:]] { gh > ก;
[^[:Ll:]] { [cgk] > ก;
[^[:Ll:]] { b > บ;
[^[:Ll:]] { đ > ด;
[^[:Ll:]] { [dzrsx] > ซ;
[^[:Ll:]] { h > ฮ;
[^[:Ll:]] { l > ล;
[^[:Ll:]] { m > ม;
[^[:Ll:]] { n > น;
[^[:Ll:]] { p > ป;
[^[:Ll:]] { t > ต;
[^[:Ll:]] { [vw] > ว;
[^[:Ll:]] { f > ฟ;
[^[:Ll:]] { j > จ;
w > ว;
[^[:Ll:]ก-ฮ] { ([aăâeêioôơuưy]) > อ $1;

::Null;

F ([ก-ฮ]+) > $1 ่;
J ([ก-ฮ]+) > $1 ่;
D ([ก-ฮ]+) > $1;
[RX] ([กจดตบปอ] ว?) > $1 ๋;
[RX] ([ก-ฮ]+) > $1;
S ([กจดตบปอ] ว?) > $1 ๊;
S ([ก-ฮ]+) > $1 ้;
Z ([กจดตบปอ] ว?) > $1 ๊;
Z ([ก-ฮ]+) > $1;

::Null;

iêu > เียว;
yêu > เียว;
ươi > เือย;
ươu > เือว;
uôi > วย;
ươ > เือ;
ưa > เือ;
ưi > ืย;
ưu > ืว;
uô > ว;
uâ > ว;
ua > ัว;
uơ > ัว;
uqi > ุย;
ui > ูย;
iê > เีย;
yê > เีย;
[iy]qa > เียะ;
[iy]a > เีย;
[iy]qu > ิว;
[iy]u > ีว;
aqi > ัย;
aqo > เา;
ai > าย;
ao > าว;
au > เา;
ay > ัย;
âu > เิว;
ây > เ็ย;
eo > แว;
êu > เว;
oi > อย;
ôi > โย;
ơi > เย;
oo > อ;
ôô > โ;
[iy][iy] > ี;
aq } [bcdđghklmnprstvxzfj] > ั;
aq > ะ;
a } ch > ั;
a } nh > ั;
a > า;
ăq > ั;
ă > ั;
âq > เิ;
â > เิ;
eq } [bcdđghklmnprstvxzfj] > แ็;
eq > แะ;
e > แ;
êq } [bcdđghklmnprstvxzfj] > เ็;
êq > เะ;
ê } [ck] > เ็;
ê } n [gh] > เ็;
ê > เ;
[iy]q > ิ;
[iy] } [ck] > ิ;
[iy] } n [gh] > ิ;
[iy] > ี;
oq } [bcdđghklmnprstvxzfj] > ็อ;
oq > เาะ;
o } [ck] > ็อ;
o } n [gh] > ็อ;
o > อ;
ôq } [bcdđghklmnprstvxzfj] > ;
ôq > โะ;
ô } [ck] > ;
ô } n [gh] > ;
ô > โ;
ơq } [bcdđghklmnprstvxzfj] > เิ;
ơq > เอะ;
ơ } [bcdđghklmnprstvxzfj] > เิ;
ơ > เอ;
uq > ุ;
u } [ck] > ุ;
u } n [gh] > ุ;
u > ู;
ưq > ึ;
ư } [ck] > ึ;
ư } n [gh] > ึ;
ư } [bcdđghklmnprstvxzfj] > ื;
ư > ือ;

::Null;

ch > ก;
[ck] > ก;
nh > ญ;
ng > ง;
m > ม;
n > น;
p > ป;
t > ต;
b > บ;
[dđ] > ด;
f > ฟ;
g > ก;
h > ;
j > จ;
l > ล;
r > ร;
s > ส;
v > ฟ;
w > ว;
x > กซ;
z > ซ;
q > ;
[FJDRXSZ] > ;

::Null;

([ก-ฮ]) (หว [่-๋]?) ([เแโไ]) > $1 $3 $2;
([ก-ฮ]+ [่-๋]?) ([เแโไ]) > $2 $1;

::Null;

([่-๋]) ็ > $1;
([่-๋]) ([ัิ-ืุู]) > $2 $1;
`;
