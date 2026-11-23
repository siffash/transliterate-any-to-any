export const svIpaRules = `
::Lower;
::NFC;

[[:L:][:M:]] { que } [^[:L:][:M:]] > k;
[^[:L:][:M:]] jo { h } n > ;
[^[:L:][:M:]] r { h } > ;
rr { h } > ;
[aeiouyåäöéèêëüïôà] [aeiouyåäöéèêëüïôà] { h } [bcdfgklmnpqrstxz] > ;
[aeiouyåäöéèêëüïôà] { h } [bcdfgklmnpqrstxz] > ː;
[aeiouyåäöéèêëüïôàdg] { h } [^[:L:][:M:]] > ;

::Null;

kristian > krɪɧan;
tion > ɧuːn;
sch > ɧ;
s [tk] j > ɧ;
sj > ɧ;
[dghl] j > j;
[tk] j > ɕ;
tth > t;
[:L:] { t } ham [mn] > t;
[:L:] { t } hus > t;
[:L:] { t } holm > t;
[:L:] { t } hult > t;
[:L:] { t } hage > t;
t [ht] > t;
ph > f;
ch } [rl] > k;
[^[:L:][:M:]] m [iɪ] ː? { ch } a > k;
ch > ɕ;

rt > ʈ;
rd > ɖ;
rn > ɳ;
rl > ɭ;
rs > ʂ;

ng > ŋ;
nk } [øö] > nɕ;
nk > ŋk;
[^[:L:][:M:]] { gn > ɡn;
gn > ŋn;

sk } [eiyäö] > ɧ;
falk > falk;
k } [eiyäö] > ɕ;
g } [eiyäö] > j;
c } [eiyäö] > s;

rg } [^[:L:][:M:]] > rj;
lg } [^[:L:][:M:]] > lj;

[ck] k > k;
qu > kv;
[qck] > k;
ex > ɛks;
x > ks;

ese } [^[:L:][:M:]] > eːs;
nne } [^[:L:][:M:]] > n;
ice } [^[:L:][:M:]] > ɪs;
au > aʊ;
oy > ɔj;
a } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] > a;
e } [bcdfghjklmnpqrstvwzʈɖɳɭʂɧɕŋ] [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] > ɛ;
i } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] > ɪ;
oo > uː;
[oå] } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] > ɔ;
u } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] > ɵ;
y } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] > ʏ;
ei > ɛj;
ä } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] > ɛ;
ö } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] > œ;

a } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [^[:L:][:M:]] > a;
e } [bcdfghjklmnpqrstvwzʈɖɳɭʂɧɕŋ] [^[:L:][:M:]] > ɛ;
i } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [^[:L:][:M:]] > ɪ;
[oå] } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [^[:L:][:M:]] > ɔ;
u } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [^[:L:][:M:]] > ɵ;
y } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [^[:L:][:M:]] > ʏ;
ä } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [^[:L:][:M:]] > ɛ;
ö } [bcdfghjklmnpqrstvwxzʈɖɳɭʂɧɕŋ] [^[:L:][:M:]] > œ;
a } [^[:L:][:M:]] > a;

a > ɑː;
à > a;
[eé] > eː;
i > iː;
o > uː;
u > ʉː;
y > yː;
å > oː;
ä > ɛː;
ö > øː;
[èêë] > ɛ;
ü > y;
ï > i;
ô > o;
ņ > ɲ;
ː > ;

bb > b;
dd > d;
ff > f;
gg > ɡ;
[lh] l > l;
mm > m;
nn > n;
pp > p;
rr > r;
ss > s;
vv > v;

b > b;
d > d;
f > f;
g > ɡ;
h > h;
j > j;
l > l;
m > m;
n > n;
p > p;
r > r;
[zçs] > s;
t > t;
[wv] > v;

::Null;

[aɑɛeiɪyʏøœʉɵuʊoɔæə] ː [bdfɡhjklmnprstvɕʂŋɧ]+ [aɑɛeiɪyʏøœʉɵuʊoɔæə] { ː } > ;
[aɑɛeiɪyʏøœʉɵuʊoɔæə] ː? [bdfɡhjklmnprstvɕʂŋɧ]* [aɑɛeiɪyʏøœʉɵuʊoɔæə] { ː } [^[:L:][:M:]] > ;
i { ː } [ɵʊu] s [^[:L:][:M:]] > ;
`;
