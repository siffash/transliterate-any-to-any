export const huLatnLtRules = `
::NFC;

G [gG]? [yY] } [AÁOÓUÚ] > DI;
G [gG]? [yY] } [aáoóuú] > Di;
g [gG]? [yY] } [aáoóuúAÁOÓUÚ] > di;

G [gG]? [yY] > D;
g [gG]? [yY] > d;

T [tT]? [yY] } [AÁOÓUÚ] > TI;
T [tT]? [yY] } [aáoóuú] > Ti;
t [tT]? [yY] } [aáoóuúAÁOÓUÚ] > ti;

T [tT]? [yY] > T;
t [tT]? [yY] > t;

N [nN]? [yY] } [AÁOÓUÚ] > NI;
N [nN]? [yY] } [aáoóuú] > Ni;
n [nN]? [yY] } [aáoóuúAÁOÓUÚ] > ni;

N [nN]? [yY] > N;
n [nN]? [yY] > n;

[hH] { e } [lL] [yY] > ė;
[hH] { E } [lL] [yY] > Ė;
`;
