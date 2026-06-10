// Hunterian transliteration system

export const hiEnRules = `
::NFD;

‌ > ;
‍ > ;

$boundary = [:^Letter:];
$cons = [bcdfghjklmnpqrstvwxyz];
$v = [aāiīuūeoŏĕ];
$nukta = ़;

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
क$nukta > qa;
ख$nukta > kha;
ग$nukta > gha;
ज$nukta > za;
ड$nukta > ra;
ढ$nukta > rha;
फ$nukta > fa;
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
ं} $boundary > m;
ं > n;
ँ > m̐;
ः > h;

::Null;

$boundary $cons h h { a } $boundary > a;
$boundary $cons h { a } $boundary > a;
$boundary $cons { a } $boundary > a;
$cons y { a } $boundary > a;
$cons r { a } $boundary > a;
$cons v { a } $boundary > a;
$cons { a } $boundary > ;

::Null;

ey { a } r > a;
$v $cons h a $cons h { a } $cons h $v > ;
$v $cons h a $cons h { a } $cons $v > ;
$v $cons h a $cons { a } $cons h $v > ;
$v $cons h a $cons { a } $cons $v > ;
$v $cons a $cons h { a } $cons h $v > ;
$v $cons a $cons h { a } $cons $v > ;
$v $cons a $cons { a } $cons h $v > ;
$v $cons a $cons { a } $cons $v > ;
$v $cons h h { a } $cons h h $v > ;
$v $cons h h { a } $cons h $v > ;
$v $cons h h { a } $cons $v > ;
$v $cons h { a } $cons h h $v > ;
$v $cons { a } $cons h h $v > ;
$v $cons h { a } $cons h $v > ;
$v $cons h { a } $cons $v > ;
$v $cons { a } $cons h $v > ;
$v $cons { a } $cons $v > ;

::NFC;
::Title;
`;
