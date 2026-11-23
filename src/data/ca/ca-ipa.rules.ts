export const caIpaRules = `
::Lower;
::NFC;

['’] > ;

::Null;

n { t } [bcçdfgjkmnpqsv] [[:L:][:M:]] > ;
n { t } [^[:L:][:M:]] [aeiouàèéíòóúïüh] > t;
[^[:L:][:M:]] [bv] i [cs] [eɛ] n { t } [^[:L:][:M:]] > t;
n { t } [^[:L:][:M:]] > ;

ll > ʎ;
ny > ɲ;
tx > t͡ʃ;
tj > d͡ʒ;
tg } [eèéiíï] > d͡ʒ;
[aàeèéoòóuúüɛɔ] { ix > ʃ;
rr > r;
ss > s;
ç > s;
l·l > ɫː;
mm > mː;
nn > nː;
y > j;
ig } [nmlr] > iɡ;
ig } [^aàeèéiíïoòóuúü] > t͡ʃ;
ig } [^[:L:][:M:]] > t͡ʃ;
qu } [eèéiíï] > k;
gu } [eèéiíï] > ɡ;
gü > ɡw;
tz > d͡z;
[dt] s > t͡s;

c } [eèéiíï] > s;
c > k;
g } [eèéiíï] > ʒ;
j > ʒ;
h > ;

[^[:L:][:M:]] { r > r;
r } [^[:L:][:M:]] > r;
[aàeèéiíïoòóuúü] { r } [aàeèéiíïoòóuúü] > ɾ;
r > r;

[aàeèéiíïoòóuúüɛɔ] { s } [aàeèéiíïoòóuúü] > z;

x } [^[:L:][:M:]] > ʃ;
[aàeèéoòóuúü] { x } [aàeèéiíïoòóuúü] > ks;
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
[èe] > ɛ;
é > e;
[iíï] > i;
[òo] > ɔ;
ó > o;
[uúü] > u;

g > ɡ;

::Null;

ʎ } [^[:L:][:M:]] > l;
ʎ } [^aɑɐæeɛəʌɚɤɜɝɘoɔɵɞɒiɪuʊyʏœøɯɨjwɥʎː] > l;
`;
