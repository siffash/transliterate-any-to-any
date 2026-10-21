export const caIpaRules = `
::Lower;
::NFC;

['] > ;

::Null;

ll > ʎ;
ny > ɲ;
tx > t͡ʃ;
tj > d͡ʒ;
tg } [eèéiíï] > d͡ʒ;
ix > ʃ;
rr > r;
ss > s;
ç > s;
l·l > ɫː;
mm > mː;
nn > nː;
y > j;
ig } n > i ɡ;
ig } m > i ɡ;
ig } l > i ɡ;
ig } r > i ɡ;
ig } [^aàeèéiíïoòóuúü] > t͡ʃ;
ig } [^[:L:][:M:]] > t͡ʃ;
qu } [eèéiíï] > k;
gu } [eèéiíï] > ɡ;
gü > ɡw;
tz > d͡z;
ds > t͡s;
ts > t͡s;

c } [eèéiíï] > s;
c > k;
g } [eèéiíï] > ʒ;
j > ʒ;
h > ;

[^[:L:][:M:]] { r > r;
r } [^[:L:][:M:]] > r;
[aàeèéiíïoòóuúü] { r } [aàeèéiíïoòóuúü] > ɾ;
r > r;

[aàeèéiíïoòóuúü] { s } [aàeèéiíïoòóuúü] > z;

x } [^[:L:][:M:]] > ʃ;
[aàeèéiíïoòóuúü] { x } [aàeèéiíïoòóuúü] > ks;
x > ʃ;

v } [ptkfsʃ{t͡ʃ}] > f;
z } [ptkfsʃ{t͡ʃ}] > s;
ʒ } [ptkfsʃ{t͡ʃ}] > ʃ;

v } [^[:L:][:M:]] > f;
z } [^[:L:][:M:]] > s;
ʒ } [^[:L:][:M:]] > ʃ;

v > b;
l > ɫ;

[aà] > a;
è > ɛ;
é > e;
[iíï] > i;
ò > ɔ;
ó > o;
[uúü] > u;

[^[:L:][:M:]] [bcdfgçhjklmnpqrstvwxyz]* { e } [bcdfgçhjklmnpqrstvwxyz]* [àèéíòóú] > ə;
e } [bcdfgçhjklmnpqrstvwxyz]* [àèéíòóú] > ə;
[a e] } [bcdfgçhjklmnpqrstvwxyz]* [^[:L:][:M:]] > ə;
o } [bcdfgçhjklmnpqrstvwxyz]* [àèéíòóú] > u;
o } [bcdfgçhjklmnpqrstvwxyz]* [^[:L:][:M:]] > u;

e > ɛ;
o > ɔ;
g > ɡ;
`;
