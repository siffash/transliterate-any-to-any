export const msIdRules = `
::NFC;

[mM] [uU] { z } [iI] > s;
[mM] [uU] { Z } [iI] > S;

[tT] [eE] [lL] [eE] { f } [oO] > p;
[tT] [eE] [lL] [eE] { F } [oO] > P;

[bB] [eE] { z } [aA] > d;
[bB] [eE] { Z } [aA] > D;

[aA] [rR] { k } [iI] > s;
[aA] [rR] { K } [iI] > S;

[aA] [rR] [sS] [iI] { b > p;
[aA] [rR] [sS] [iI] { B > P;

f } [aA] [hH] [aA] [mM] > p;
F } [aA] [hH] [aA] [mM] > P;

f } [iI] [kK] [iI] [rR] > p;
F } [iI] [kK] [iI] [rR] > P;

[^[:L:][:M:]] { bilik } [^[:L:][:M:]] [mM] [aA] [nN] [dD] [iI] > kamar;
[^[:L:][:M:]] { Bilik } [^[:L:][:M:]] [mM] [aA] [nN] [dD] [iI] > Kamar;
[^[:L:][:M:]] { BILIK } [^[:L:][:M:]] [mM] [aA] [nN] [dD] [iI] > KAMAR;

[^[:L:][:M:]] { bilik } [^[:L:][:M:]] [tT] [iI] [dD] [uU] [rR] > kamar;
[^[:L:][:M:]] { Bilik } [^[:L:][:M:]] [tT] [iI] [dD] [uU] [rR] > Kamar;
[^[:L:][:M:]] { BILIK } [^[:L:][:M:]] [tT] [iI] [dD] [uU] [rR] > KAMAR;

[^[:L:][:M:]] { pejabat } [^[:L:][:M:]] [pP] [oO] [sS] > kantor;
[^[:L:][:M:]] { Pejabat } [^[:L:][:M:]] [pP] [oO] [sS] > Kantor;
[^[:L:][:M:]] { PEJABAT } [^[:L:][:M:]] [pP] [oO] [sS] > KANTOR;

[uU] [nN] [iI] [vV] [eE] [rR] [sS] { iti > itas;
[uU] [nN] [iI] [vV] [eE] [rR] [sS] { ITI > ITAS;

[kK] [uU] [aA] [lL] { iti > itas;
[kK] [uU] [aA] [lL] { ITI > ITAS;

[kK] [uU] [aA] [nN] [tT] { iti > itas;
[kK] [uU] [aA] [nN] [tT] { ITI > ITAS;

[mM] [aA] { joriti > yoritas;
[mM] [aA] { JORITI > YORITAS;

[mM] [iI] [nN] [oO] [rR] { iti > itas;
[mM] [iI] [nN] [oO] [rR] { ITI > ITAS;

[fF] [aA] [sS] [iI] [lL] { iti > itas;
[fF] [aA] [sS] [iI] [lL] { ITI > ITAS;

[kK] [oO] [mM] [uU] [nN] { iti > itas;
[kK] [oO] [mM] [uU] [nN] { ITI > ITAS;

[iIeE] { syen > si;
[iIeE] { SYEN > SI;

[^[:L:][:M:]] { Mac } [^[:L:][:M:]] > Maret;
[^[:L:][:M:]] { mac } [^[:L:][:M:]] > maret;
[^[:L:][:M:]] { MAC } [^[:L:][:M:]] > MARET;

[^[:L:][:M:]] { Jun } [^[:L:][:M:]] > Juni;
[^[:L:][:M:]] { jun } [^[:L:][:M:]] > juni;
[^[:L:][:M:]] { JUN } [^[:L:][:M:]] > JUNI;

[^[:L:][:M:]] { Julai } [^[:L:][:M:]] > Juli;
[^[:L:][:M:]] { julai } [^[:L:][:M:]] > juli;
[^[:L:][:M:]] { JULAI } [^[:L:][:M:]] > JULI;

[^[:L:][:M:]] { Ogos } [^[:L:][:M:]] > Agustus;
[^[:L:][:M:]] { ogos } [^[:L:][:M:]] > agustus;
[^[:L:][:M:]] { OGOS } [^[:L:][:M:]] > AGUSTUS;

[^[:L:][:M:]] { Disember } [^[:L:][:M:]] > Desember;
[^[:L:][:M:]] { disember } [^[:L:][:M:]] > desember;
[^[:L:][:M:]] { DISEMBER } [^[:L:][:M:]] > DESEMBER;

[^[:L:][:M:]] { Isnin > Senin;
[^[:L:][:M:]] { isnin > senin;
[^[:L:][:M:]] { ISNIN > SENIN;

[^[:L:][:M:]] { Khamis > Kamis;
[^[:L:][:M:]] { khamis > kamis;
[^[:L:][:M:]] { KHAMIS > KAMIS;

[^[:L:][:M:]] { Jumaat > Jumat;
[^[:L:][:M:]] { jumaat > jumat;
[^[:L:][:M:]] { JUMAAT > JUMAT;

[^[:L:][:M:]] { Iaitu > Yaitu;
[^[:L:][:M:]] { iaitu > yaitu;
[^[:L:][:M:]] { IAITU > YAITU;

[^[:L:][:M:]] { Kerana > Karena;
[^[:L:][:M:]] { kerana > karena;
[^[:L:][:M:]] { KERANA > KARENA;

[kK] [eE] { wang } [aA] [nN] > uang;
[kK] [eE] { WANG } [aA] [nN] > UANG;

[^[:L:][:M:]] { Wang } [^[:L:][:M:]] > Uang;
[^[:L:][:M:]] { wang } [^[:L:][:M:]] > uang;
[^[:L:][:M:]] { WANG } [^[:L:][:M:]] > UANG;

[^[:L:][:M:]] { Erti > Arti;
[^[:L:][:M:]] { erti > arti;
[^[:L:][:M:]] { ERTI > ARTI;

[^[:L:][:M:]] { Bererti > Berarti;
[^[:L:][:M:]] { bererti > berarti;
[^[:L:][:M:]] { BERERTI > BERARTI;

[^[:L:][:M:]] { Stesen > Stasiun;
[^[:L:][:M:]] { stesen > stasiun;
[^[:L:][:M:]] { STESEN > STASIUN;

::Null;

[bB] { [bB]+ > ;
[cC] { [cC]+ > ;
[dD] { [dD]+ > ;
[fF] { [fF]+ > ;
[gG] { [gG]+ > ;
[hH] { [hH]+ > ;
[jJ] { [jJ]+ > ;
[kK] { [kK]+ > ;
[lL] { [lL]+ > ;
[mM] { [mM]+ > ;
[nN] { [nN]+ > ;
[pP] { [pP]+ > ;
[qQ] { [qQ]+ > ;
[rR] { [rR]+ > ;
[sS] { [sS]+ > ;
[tT] { [tT]+ > ;
[vV] { [vV]+ > ;
[wW] { [wW]+ > ;
[xX] { [xX]+ > ;
[yY] { [yY]+ > ;
[zZ] { [zZ]+ > ;

[sS] [yY] { [sS]+ [yY]+ > ;
[kK] [hH] { [kK]+ [hH]+ > ;
[nN] [yY] { [nN]+ [yY]+ > ;
`;
