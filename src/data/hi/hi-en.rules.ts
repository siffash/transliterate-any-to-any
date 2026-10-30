export const hiEnRules = `
::NFD;

[।॥॰] > \\.;
ॲ > ऍ;
ँ > ं;

::Null;

[‌‍] > ;

अ > a;
आ > ā;
इ > i;
ई > ī;
उ > u;
ऊ > ū;
ऋ > ri;
ए > e;
ऐ > ai;
ऍ > ĕ;
ओ > o;
औ > au;
ऑ > ŏ;
क़ > qa;
ख़ > kha;
ग़ > gha;
ज़ > za;
ड़ > ra;
ढ़ > rha;
फ़ > fa;
ज्ञ > gya;
क > ka;
ख > kha;
ग > ga;
घ > gha;
ङ > na;
च > cha;
छ > chha;
ज > ja;
झ > jha;
ञ > na;
ट > ta;
ठ > tha;
ड > da;
ढ > dha;
ण > na;
त > ta;
थ > tha;
द > da;
ध > dha;
न > na;
प > pa;
फ > pha;
ब > ba;
भ > bha;
म > ma;
य > ya;
र > ra;
ल > la;
ळ > la;
ऌ > li;
व > va;
श > sha;
ष > sha;
स > sa;
ह > ha;

ऽ > \\';
ॐ > om;
० > 0;
१ > 1;
२ > 2;
३ > 3;
४ > 4;
५ > 5;
६ > 6;
७ > 7;
८ > 8;
९ > 9;

::Null;

aा > ā;
aि > i;
aी > ī;
aु > u;
aू > ū;
aृ > ri;
aे > e;
aै > ai;
aॅ > ĕ;
aो > o;
aौ > au;
aॉ > ŏ;
a् > ;

::Null;

ंva } [^[:L:][:M:]] > on;
ं}h > ng;
ं}kh > n;
ं}k > n;
ं}gh > n;
ं}g > n;
ं}chh > n;
ं}c > n;
ं}jh > n;
ं}j > n;
ं}th > n;
ं}t > n;
ं}dh > n;
ं}d > n;
ं}ph > m;
ं}p > m;
ं}bh > m;
ं}b > m;
ं}m > m;
ं} [^[:L:][:M:]] > n;
ं > n;
ँ > m̐;
ः > h;

::Null;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxyz] hh { a } [^[:L:][:M:]] > a;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxyz] h { a } [^[:L:][:M:]] > a;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxyz] { a } [^[:L:][:M:]] > a;
[bcdfghjklmnpqrstvwxyz] y { a } [^[:L:][:M:]] > a;
[bcdfghjklmnpqrstvwxyz] [mln] { a } [^[:L:][:M:]] > a;
[bcdfghjklmnpqrstvwxyz] r { a } [^[:L:][:M:]] > a;
[bcdfghjklmnpqrstvwxyz] v { a } [^[:L:][:M:]] > a;
[bcdfghjklmnpqrstvwxyz] { a } [^[:L:][:M:]] > ;

::Null;

[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h? h? { a } pur [^[:L:][:M:]] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h? h? { a } lāl [^[:L:][:M:]] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h? h? { a } nāth [^[:L:][:M:]] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h? h? { a } dās [^[:L:][:M:]] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h? h? { a } pāl [^[:L:][:M:]] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h? h? { a } nagar [^[:L:][:M:]] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h? h? { a } garh [^[:L:][:M:]] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h? h? { a } chand [^[:L:][:M:]] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h? h? { a } prasād [^[:L:][:M:]] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h? h? { a } prakāsh [^[:L:][:M:]] > ;

::Null;

v { a } tī [^[:L:][:M:]] > a;
āv { a } rī [^[:L:][:M:]] > a;
ey { a } r > a;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] ha [bcdfghjklmnpqrstvwxyz] h { a } [bcdfghjklmnpqrstvwxyz] h [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] ha [bcdfghjklmnpqrstvwxyz] h { a } [bcdfghjklmnpqrstvwxyz] [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] ha [bcdfghjklmnpqrstvwxyz] { a } [bcdfghjklmnpqrstvwxyz] h [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] ha [bcdfghjklmnpqrstvwxyz] { a } [bcdfghjklmnpqrstvwxyz] [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] a [bcdfghjklmnpqrstvwxyz] h { a } [bcdfghjklmnpqrstvwxyz] h [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] a [bcdfghjklmnpqrstvwxyz] h { a } [bcdfghjklmnpqrstvwxyz] [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] a [bcdfghjklmnpqrstvwxyz] { a } [bcdfghjklmnpqrstvwxyz] h [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] a [bcdfghjklmnpqrstvwxyz] { a } [bcdfghjklmnpqrstvwxyz] [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] hh { a } [bcdfghjklmnpqrstvwxyz] h h [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] hh { a } [bcdfghjklmnpqrstvwxyz] h [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] hh { a } [bcdfghjklmnpqrstvwxyz] [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h { a } [bcdfghjklmnpqrstvwxyz] h h [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] { a } [bcdfghjklmnpqrstvwxyz] h h [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h { a } [bcdfghjklmnpqrstvwxyz] h [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] h { a } [bcdfghjklmnpqrstvwxyz] [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] { a } [bcdfghjklmnpqrstvwxyz] h [aāiīuūeoŏĕ] > ;
[aāiīuūeoŏĕ] [bcdfghjklmnpqrstvwxyz] { a } [bcdfghjklmnpqrstvwxyz] [aāiīuūeoŏĕ] > ;

::Null;

[bdgjklst] { v > w;
[bcdgjkps] h { v > w;
v } āl [^[:L:][:M:]] > w;
v } ālā [^[:L:][:M:]] > w;
v } āliyā [^[:L:][:M:]] > w;

::NFC;
::Null;

ā > a;
ī > i;
ū > u;
ŏ > o;
ĕ > e;

::Null;

[:Devanagari:] > ;



::Null;

w { w+ > ;
y { y+ > ;
ch { h > h;
h { h+ > ;
i { i+ } [^[:L:][:M:]] > ;
[^[:L:][:M:]] { c+ } k > ;

::Null;

k { k+ } h > ;
g { g+ } h > ;

::Title;
`;
