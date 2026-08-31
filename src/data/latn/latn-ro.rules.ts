export const latnRoRules = `
::Null;

IJ > EI;
Ij > Ei;
ij > ei;

DZ > Z;
Dz > Z;
dz > z;

TH > T;
Th > T;
th > t;

GH > H;
Gh > H;
gh > h;

KH > H;
Kh > H;
kh > h;

TS > Ț;
Ts > Ț;
ts > ț;

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
k } [EeIi] > ch;
K > C;
k > c;

G } [EI] > GH;
G } [ei] > Gh;
g } [EeIi] > gh;

DŽ } [EeIi] > G;
Dž } [EeIi] > G;
dž } [EeIi] > g;
DŽ > GI;
Dž } [:Ll:] > Gi;
Dž > GI;
dž > gi;

Đ } [EeIi] > G;
đ } [EeIi] > g;
Đ } [:Ll:] > Gi;
Đ > GI;
đ > gi;

[ČĆ] } [EeIi] > C;
[čć] } [EeIi] > c;
[ČĆ] } [:Ll:] > Ci;
[ČĆ] > CI;
[čć] > ci;

Š > Ș;
š > ș;

Ž > J;
ž > j;

Ľ } [:Ll:] > Li;
Ľ > LI;
ľ > li;

Ń } [:Ll:] > Ni;
Ń > NI;
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
