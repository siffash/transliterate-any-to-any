export const latnElRules = `
::Null;

DŽ > ΤΖ;
Dž > Τζ;
dž > τζ;

DZ > ΤΖ;
Dz > Τζ;
dz > τζ;

TS > ΤΣ;
Ts } [:^Letter:] > Τς;
Ts > Τσ;
ts } [:^Letter:] > τς;
ts > τσ;

TH > Θ;
Th > Θ;
th > θ;

DH > Δ;
Dh > Δ;
dh > δ;

GH > Γ;
Gh > Γ;
gh > γ;

NG > ΓΓ;
Ng > Γγ;
ng > γγ;

KH > Χ;
Kh > Χ;
kh > χ;

IJ > ΕΙ;
Ij > Ει;
ij > ει;

Č } [[:Lower:]] > Τσ;
Č > ΤΣ;
č } [:^Letter:] > τς;
č > τσ;

Ć } [[:Lower:]] > Τσ;
Ć > ΤΣ;
ć } [:^Letter:] > τς;
ć > τσ;

Đ } [[:Lower:]] > Τζ;
Đ > ΤΖ;
đ > τζ;

B } [[:Lower:]] > Μπ;
B > ΜΠ;
b > μπ;

D } [[:Lower:]] > Ντ;
D > ΝΤ;
d > ντ;

G } [[:Lower:]] > Γκ;
G > ΓΚ;
g > γκ;

U } [[:Lower:]] > Ου;
U > ΟΥ;
u > ου;

Ľ } [[:Lower:]] > Λι;
Ľ > ΛΙ;
ľ > λι;

Ń } [[:Lower:]] > Νι;
Ń > ΝΙ;
ń > νι;

[sš] } [:^Letter:] > ς;
[sš] > σ;
[SŠ] > Σ;
[zž] > ζ;
[ZŽ] > Ζ;
[hx] > χ;
[HX] > Χ;
[kq] > κ;
[KQ] > Κ;
[vw] > β;
[VW] > Β;

a > α;
A > Α;
[äeö] > ε;
[ÄEÖ] > Ε;
[iïüÿy] > ι;
[IÏÜŸY] > Ι;
o > ο;
O > Ο;
f > φ;
F > Φ;
l > λ;
L > Λ;
m > μ;
M > Μ;
n > ν;
N > Ν;
p > π;
P > Π;
r > ρ;
R > Ρ;
t > τ;
T > Τ;

\\' > ;

::Null;

ς } [:Letter:] > σ;
σ } [:^Letter:] > ς;
`;
