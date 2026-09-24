export const latnMsRules = `
::NFC;

IJ > AI;
Ij > Ai;
iJ > aI;
ij > ai;

D [žŽ] > J;
d [žŽ] > j;

D [zZ] > Z;
d [zZ] > z;

T [sS] > S;
t [sS] > s;

T [hH] > S;
t [hH] > s;

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
