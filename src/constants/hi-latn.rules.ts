export const hiLatnRules = `
::NFD;

‌ > ;
‍ > ;

अ > a;
आ > a;
इ > i;
ई > i;
उ > u;
ऊ > u;
ऋ > ri;
ए > e;
ऐ > ai;
ऍ > ä;
ओ > o;
औ > au;
ऑ > ö;

क़ > qa;
ख़ > xa;
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
ङ > nga;
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
aॅ > ä;
aो > o;
aौ > au;
aॉ > ö;
a् > ;

::Null;

ं } dž > ń;
ं } č > ń;
ं } [td] > n;
ं } [kg] > ng;
ं } [pb] > m;
ं } m > m;
ं } [:^Letter:] > n;
ं > n;
ँ > n;
ः > h;

::NFC;
::Title;
`;
