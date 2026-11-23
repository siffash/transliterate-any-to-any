export const idMsRules = `
::NFC;

[iI] [tT] { as } [^[:L:][:M:]] > i;
[iI] [tT] { AS } [^[:L:][:M:]] > I;

[mM] [eE] [kK] [aA] [nN] [iI] { s } [^[:L:][:M:]] > k;
[mM] [eE] [kK] [aA] [nN] [iI] { S } [^[:L:][:M:]] > K;

[tT] [eE] [kK] [nN] [iI] { s } [^[:L:][:M:]] > k;
[tT] [eE] [kK] [nN] [iI] { S } [^[:L:][:M:]] > K;

[aA] [kK] [aA] [dD] [eE] [mM] [iI] { s } [^[:L:][:M:]] > k;
[aA] [kK] [aA] [dD] [eE] [mM] [iI] { S } [^[:L:][:M:]] > K;

[pP] [oO] [lL] [iI] [tT] [iI] { s } [^[:L:][:M:]] > k;
[pP] [oO] [lL] [iI] [tT] [iI] { S } [^[:L:][:M:]] > K;

::Null;

[^[:L:][:M:]] [kK] { are } [nN] [aA] > era;
[^[:L:][:M:]] [kK] { ARE } [nN] [aA] > ERA;

[^[:L:][:M:]] { y } [aA] [iI] [tT] [uU] > i;
[^[:L:][:M:]] { Y } [aA] [iI] [tT] [uU] > I;

p } [iI] [kK] [iI] [rR] > f;
P } [iI] [kK] [iI] [rR] > F;

p } [aA] [hH] [aA] [mM] > f;
P } [aA] [hH] [aA] [mM] > F;

[nN] [aA] { p } [aA] [sS] > f;
[nN] [aA] { P } [aA] [sS] > F;

[bB] [eE] [rR] [bB] [eE] { d } [aA] [^[:L:][:M:]] > z;
[bB] [eE] [rR] [bB] [eE] { D } [aA] [^[:L:][:M:]] > Z;

[pP] [eE] [rR] [bB] [eE] { d } [aA] [aA] [nN] > z;
[pP] [eE] [rR] [bB] [eE] { D } [aA] [aA] [nN] > Z;

[mM] [eE] [mM] [bB] [eE] { d } [aA] [kK] [aA] [nN] > z;
[mM] [eE] [mM] [bB] [eE] { D } [aA] [kK] [aA] [nN] > Z;

[bB] [eE] { d } [aA] [^[:L:][:M:]] > z;
[bB] [eE] { D } [aA] [^[:L:][:M:]] > Z;

[jJ] [aA] [dD] { w } [aA] [lL] > u;
[jJ] [aA] [dD] { W } [aA] [lL] > U;

[^[:L:][:M:]] [kK] [eE] { u } [aA] [nN] [gG] [aA] [nN] > w;
[^[:L:][:M:]] [kK] [eE] { U } [aA] [nN] [gG] [aA] [nN] > W;

[^[:L:][:M:]] { u } [aA] [nN] [gG] > w;
[^[:L:][:M:]] { U } [aA] [nN] [gG] > W;

[sS] { [yY] } [aA] [rR] [aA] [fF] > ;

[tT] [eE] [lL] [eE] { p } [oO] [nN] > f;
[tT] [eE] [lL] [eE] { P } [oO] [nN] > F;

[tT] [eE] [lL] { p } [oO] [nN] > ef;
[tT] [eE] [lL] { P } [oO] [nN] > EF;

[rR] { e } [sS] [iI] [kK] [oO] > i;
[rR] { E } [sS] [iI] [kK] [oO] > I;

[^[:L:][:M:]] [eE] [sS] { a } [iI] [^[:L:][:M:]] > e;
[^[:L:][:M:]] [eE] [sS] { A } [iI] [^[:L:][:M:]] > E;

[^[:L:][:M:]] [mM] [uU] { s } [iI] [kK] [^[:L:][:M:]] > z;
[^[:L:][:M:]] [mM] [uU] { S } [iI] [kK] [^[:L:][:M:]] > Z;

[^[:L:][:M:]] [aA] [rR] { sip } [^[:L:][:M:]] > kib;
[^[:L:][:M:]] [aA] [rR] { SIP } [^[:L:][:M:]] > KIB;

[^[:L:][:M:]] { kamar } [^[:L:][:M:]] [mM] [aA] [nN] [dD] [iI] > bilik;
[^[:L:][:M:]] { Kamar } [^[:L:][:M:]] [mM] [aA] [nN] [dD] [iI] > Bilik;
[^[:L:][:M:]] { KAMAR } [^[:L:][:M:]] [mM] [aA] [nN] [dD] [iI] > BILIK;

[^[:L:][:M:]] { kamar } [^[:L:][:M:]] [tT] [iI] [dD] [uU] [rR] > bilik;
[^[:L:][:M:]] { Kamar } [^[:L:][:M:]] [tT] [iI] [dD] [uU] [rR] > Bilik;
[^[:L:][:M:]] { KAMAR } [^[:L:][:M:]] [tT] [iI] [dD] [uU] [rR] > BILIK;

[^[:L:][:M:]] { kantor } [^[:L:][:M:]] [pP] [oO] [sS] > pejabat;
[^[:L:][:M:]] { Kantor } [^[:L:][:M:]] [pP] [oO] [sS] > Pejabat;
[^[:L:][:M:]] { KANTOR } [^[:L:][:M:]] [pP] [oO] [sS] > PEJABAT;

[^[:L:][:M:]] { Maret } [^[:L:][:M:]] > Mac;
[^[:L:][:M:]] { maret } [^[:L:][:M:]] > mac;
[^[:L:][:M:]] { MARET } [^[:L:][:M:]] > MAC;

[^[:L:][:M:]] { Juni } [^[:L:][:M:]] > Jun;
[^[:L:][:M:]] { juni } [^[:L:][:M:]] > jun;
[^[:L:][:M:]] { JUNI } [^[:L:][:M:]] > JUN;

[^[:L:][:M:]] { Juli } [^[:L:][:M:]] > Julai;
[^[:L:][:M:]] { juli } [^[:L:][:M:]] > julai;
[^[:L:][:M:]] { JULI } [^[:L:][:M:]] > JULAI;

[^[:L:][:M:]] { Agustus } [^[:L:][:M:]] > Ogos;
[^[:L:][:M:]] { agustus } [^[:L:][:M:]] > ogos;
[^[:L:][:M:]] { AGUSTUS } [^[:L:][:M:]] > OGOS;

[^[:L:][:M:]] { Desember } [^[:L:][:M:]] > Disember;
[^[:L:][:M:]] { desember } [^[:L:][:M:]] > disember;
[^[:L:][:M:]] { DESEMBER } [^[:L:][:M:]] > DISEMBER;

[^[:L:][:M:]] { Senin } [^[:L:][:M:]] > Isnin;
[^[:L:][:M:]] { senin } [^[:L:][:M:]] > isnin;
[^[:L:][:M:]] { SENIN } [^[:L:][:M:]] > ISNIN;

[^[:L:][:M:]] { Kamis } [^[:L:][:M:]] > Khamis;
[^[:L:][:M:]] { kamis } [^[:L:][:M:]] > khamis;
[^[:L:][:M:]] { KAMIS } [^[:L:][:M:]] > KHAMIS;

[^[:L:][:M:]] { Jumat } [^[:L:][:M:]] > Jumaat;
[^[:L:][:M:]] { jumat } [^[:L:][:M:]] > jumaat;
[^[:L:][:M:]] { JUMAT } [^[:L:][:M:]] > JUMAAT;

[^[:L:][:M:]] { Arti } [^[:L:][:M:]] > Erti;
[^[:L:][:M:]] { arti } [^[:L:][:M:]] > erti;
[^[:L:][:M:]] { ARTI } [^[:L:][:M:]] > ERTI;

[^[:L:][:M:]] { Berarti } [^[:L:][:M:]] > Bererti;
[^[:L:][:M:]] { berarti } [^[:L:][:M:]] > bererti;
[^[:L:][:M:]] { BERARTI } [^[:L:][:M:]] > BERERTI;

[^[:L:][:M:]] { Stasiun } [^[:L:][:M:]] > Stesen;
[^[:L:][:M:]] { stasiun } [^[:L:][:M:]] > stesen;
[^[:L:][:M:]] { STASIUN } [^[:L:][:M:]] > STESEN;

::Null;

[^[:L:][:M:]] [bB] { u } [sS] [^[:L:][:M:]] > a;
[^[:L:][:M:]] [bB] { U } [sS] [^[:L:][:M:]] > A;
`;
