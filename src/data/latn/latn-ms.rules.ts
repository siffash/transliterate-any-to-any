export const latnMsRules = `
::NFC;

IJ > AI;
Ij > Ai;
iJ > aI;
ij > ai;

DŽ > J;
Dž > J;
dŽ > j;
dž > j;

DZ > Z;
Dz > Z;
dZ > z;
dz > z;

TS > S;
Ts > S;
tS > s;
ts > s;

TH > S;
Th > S;
tH > s;
th > s;

::Null;

[ÄÏ] > E;
[äï] > e;

Ö > O;
ö > o;

[ÜŸ] > U;
[üÿ] > u;

Q > K;
q > k;

[:Lu:] { X > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [Yy] > L;
ľ } [Yy] > l;
[:Lu:] { Ľ > LY;
Ľ } [:Lu:] > LY;
Ľ > Ly;
ľ > ly;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [Yy] > N;
ń } [Yy] > n;
[:Lu:] { Ń > NY;
Ń } [:Lu:] > NY;
Ń > Ny;
ń > ny;

[:Lu:] { Š > SY;
Š } [:Lu:] > SY;
Š > Sy;
š > sy;

Ž > Z;
ž > z;

Đ > J;
đ > j;

[ČĆ] > C;
[čć] > c;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[^[:L:][:M:]] { \\' > ;
\\' } [AEIOUaeiou] > ;
[:Lu:] { \\' } [:Lu:] > K;
[:Lu:] { \\' } [^[:L:][:M:]] > K;
\\' > k;
`;
