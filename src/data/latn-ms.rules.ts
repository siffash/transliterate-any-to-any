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

Ä > E;
ä > e;
Ï > E;
ï > e;
Ö > O;
ö > o;
Ü > U;
ü > u;
Ÿ > I;
ÿ > i;

Q > K;
q > k;

[:Lu:] { X > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

[:Lu:] { Ľ > LY;
Ľ } [:Lu:] > LY;
Ľ > Ly;
ľ > ly;

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
Ć > C;
ć > c;
Č > C;
č > c;

· > ;

::Null;

[:^Letter:] { \\' > ;
\\' } [AEIOUaeiou] > ;
[:Lu:] { \\' } [:Lu:] > K;
[:Lu:] { \\' } [:^Letter:] > K;
\\' > k;
`;
