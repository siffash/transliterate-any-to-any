export const latnRoRules = `
::Null;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

D [zZ] > Z;
d [zZ] > z;

T [hH] > T;
t [hH] > t;

G [hH] > H;
g [hH] > h;

K [hH] > H;
k [hH] > h;

T [sS] > Ț;
t [sS] > ț;

::Null;

Q > C;
q > c;

W > V;
w > v;

X > H;
x > h;

Y > I;
y > i;

Ä > Ă;
ä > ă;

Ö > O;
ö > o;

[ÜŸ] > U;
[üÿ] > u;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

K } [EI] > CH;
K } [ei] > Ch;
k } [EI] > cH;
k } [ei] > ch;
K > C;
k > c;

G } [EI] > GH;
G } [ei] > Gh;
g } [EI] > gH;
g } [ei] > gh;

D [žŽ] } [EeIi] > G;
d [žŽ] } [EeIi] > g;
DŽ > GI;
Dž > Gi;
dŽ > gI;
dž > gi;

Đ } [EeIi] > G;
đ } [EeIi] > g;
[:Lu:] { Đ > GI;
Đ } [:Lu:] > GI;
Đ > Gi;
đ > gi;

[ČĆ] } [EeIi] > C;
[čć] } [EeIi] > c;
[:Lu:] { [ČĆ] > CI;
[ČĆ] } [:Lu:] > CI;
[ČĆ] > Ci;
[čć] > ci;

Š > Ș;
š > ș;

Ž > J;
ž > j;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Ii] > L;
ľ } [Ii] > l;
[:Lu:] { Ľ > LI;
Ľ } [:Lu:] > LI;
Ľ > Li;
ľ > li;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Ii] > N;
ń } [Ii] > n;
[:Lu:] { Ń > NI;
Ń } [:Lu:] > NI;
Ń > Ni;
ń > ni;

::Null;

[^[:L:][:M:]] { Ï > Î;
Ï } [^[:L:][:M:]] > Î;
[^[:L:][:M:]] { ï > î;
ï } [^[:L:][:M:]] > î;
Ï > Â;
ï > â;

::Null;

[^[:L:][:M:]] { â > î;
[^[:L:][:M:]] { Â > Î;
â } [^[:L:][:M:]] > î;
Â } [^[:L:][:M:]] > Î;
[:L:] { î } [:L:] > â;
[:L:] { Î } [:L:] > Â;
`;
