export const elLatnRules = `
::NFD;

$mark = [:Mn:];
$voiced = [βγδζλμνρΒΓΔΖΛΜΝΡαεηιουωΑΕΗΙΟΥΩ];

́ > ;
̓ > ;
̔ > ;
ͅ > ;

Α Υ ̈ > A Y ̈;
Α υ ̈ > A y ̈;
α υ ̈ > a y ̈;
Ε Υ ̈ > E Y ̈;
Ε υ ̈ > E y ̈;
ε υ ̈ > e y ̈;
Η Υ ̈ > I Y ̈;
Η υ ̈ > I y ̈;
η υ ̈ > i y ̈;
Ο Υ ̈ > O Y ̈;
Ο υ ̈ > O y ̈;
ο υ ̈ > o y ̈;

Α υ } $mark* $voiced > A v;
Α Υ } $mark* $voiced > A V;
α υ } $mark* $voiced > a v;

Α υ > A f;
Α Υ > A F;
α υ > a f;

Ε υ } $mark* $voiced > E v;
Ε Υ } $mark* $voiced > E V;
ε υ } $mark* $voiced > e v;

Ε υ > E f;
Ε Υ > E F;
ε υ > e f;

Η υ } $mark* $voiced > I v;
Η Υ } $mark* $voiced > I V;
η υ } $mark* $voiced > i v;

Η υ > I f;
Η Υ > I F;
η υ > i f;

Ο υ > O u;
Ο Υ > O U;
ο υ > o u;

Α ι > A i;
Α Ι > A I;
α ι > a i;

Ε ι > E i;
Ε Ι > E I;
ε ι > e i;

Ο ι > O i;
Ο Ι > O I;
ο ι > o i;

Υ ι > Y i;
Υ Ι > Y I;
υ ι > y i;

Γ Κ } [:Lower:] > G k;
Γ Κ > G K;
Γ κ > G k;
γ κ > g k;

[:^Letter:] { Μ Π > B;
[:^Letter:] { Μ π > B;
Μ Π } [:^Letter:] > B;
Μ π } [:^Letter:] > b;
μ π } [:^Letter:] > b;
[:^Letter:] { μ π > b;

Μ Π } [:Lower:] > M p;
Μ Π > M P;
Μ π > M p;
μ π > m p;

Ν Τ } [:Lower:] > N t;
Ν Τ > N T;
Ν τ > N t;
ν τ > n t;

Γ Γ } [:Lower:] > N g;
Γ Γ > N G;
Γ γ > N g;
γ γ > n g;

Γ Ξ } [:Lower:] > N k s;
Γ Ξ > N K S;
Γ ξ > N k s;
γ ξ > n k s;

Γ Χ } [:Lower:] > N x;
Γ Χ > N X;
Γ χ > N x;
γ χ > n x;

Τ Σ } [:Lower:] > T s;
Τ Σ > T S;
Τ σ > T s;
Τ ς > T s;
τ σ > t s;
τ ς > t s;

Τ Ζ } [:Lower:] > D z;
Τ Ζ > D Z;
Τ ζ > D z;
τ ζ > d z;

Θ } [:Lower:] > T h;
Θ > T H;
θ > t h;

Ξ } [:Lower:] > K s;
Ξ > K S;
ξ > k s;

Ψ } [:Lower:] > P s;
Ψ > P S;
ψ > p s;

Α > A;
α > a;
Β > V;
β > v;
Γ > G;
γ > g;
Δ > D;
δ > d;
Ε > E;
ε > e;
Ζ > Z;
ζ > z;
Η > I;
η > i;
Ι > I;
ι > i;
Κ > K;
κ > k;
Λ > L;
λ > l;
Μ > M;
μ > m;
Ν > N;
ν > n;
Ο > O;
ο > o;
Π > P;
π > p;
Ρ > R;
ρ > r;
Σ > S;
σ > s;
ς > s;
Τ > T;
τ > t;
Υ > Y;
υ > y;
Φ > F;
φ > f;
Χ > X;
χ > x;
Ω > O;
ω > o;

::NFC;
`;
