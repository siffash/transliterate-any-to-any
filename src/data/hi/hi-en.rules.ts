// Hunterian transliteration system

export const hiEnRules = `
::NFD;

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
ं} [^[:L:][:M:]] > m;
ं > n;
ँ > m̐;
ः > h;

::Null;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxyz] hh { a } [^[:L:][:M:]] > a;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxyz] h { a } [^[:L:][:M:]] > a;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxyz] { a } [^[:L:][:M:]] > a;
[bcdfghjklmnpqrstvwxyz] y { a } [^[:L:][:M:]] > a;
[bcdfghjklmnpqrstvwxyz] r { a } [^[:L:][:M:]] > a;
[bcdfghjklmnpqrstvwxyz] v { a } [^[:L:][:M:]] > a;
[bcdfghjklmnpqrstvwxyz] { a } [^[:L:][:M:]] > ;

::Null;

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

::NFC;
::Null;

ā > a;
ī > i;
ū > u;
ŏ > o;
ĕ > e;

::Null;

w { w > ;
y { y > ;
[^[:L:][:M:]] { c } k > ;

::Title;
`;
