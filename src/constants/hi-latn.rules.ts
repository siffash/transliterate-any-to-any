export const hiLatnRules = `
::NFD;

‌ > ;
‍ > ;

$nukta = ़;

अ > a;
आ > a;
इ > i;
ई > i;
उ > u;
ऊ > u;
ऋ > ri;
ए > e;
ऐ > ai;
ऍ > e;
ओ > o;
औ > au;
ऑ > o;

क$nukta > ka;
ख$nukta > xa;
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
च > ča;
छ > čha;
ज > dža;
झ > džha;
ञ > ńa;
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
श > ša;
ष > ša;
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

aा > a;
aि > i;
aी > i;
aु > u;
aू > u;
aृ > ri;
aे > e;
aै > ai;
aॅ > e;
aो > o;
aौ > au;
aॉ > o;
a् > ;

::Null;

ं}kh > n;
ं}k > n;
ं}gh > n;
ं}g > n;
ं}čh > ń;
ं}č > ń;
ं}džh > ń;
ं}dž > ń;
ं}th > n;
ं}t > n;
ं}dh > n;
ं}d > n;
ं}ph > m;
ं}p > m;
ं}bh > m;
ं}b > m;
ं}m > m;
ं}[:^Letter:] > m;
ं > n;
ँ > n;
ः > h;

::NFC;
::Title;
`;
