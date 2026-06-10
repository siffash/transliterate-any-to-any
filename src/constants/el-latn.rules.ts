export const elLatnRules = `
::NFD;

$boundary = [:^Letter:];
$mark = [:Mn:];
$voiced = [βγδζλμνρΒΓΔΖΛΜΝΡαεηιουωΑΕΗΙΟΥΩ];

̓ >;
̔ >;
ͅ >;

Α Υ ̈ ́ > A Y ̈ ́;
Α Υ ̈ > A Y ̈;
Α υ ̈ ́ > A y ̈ ́;
Α υ ̈ > A y ̈;
α υ ̈ ́ > a y ̈ ́;
α υ ̈ > a y ̈;
Ε Υ ̈ ́ > E Y ̈ ́;
Ε Υ ̈ > E Y ̈;
Ε υ ̈ ́ > E y ̈ ́;
Ε υ ̈ > E y ̈;
ε υ ̈ ́ > e y ̈ ́;
ε υ ̈ > e y ̈;
Η Υ ̈ ́ > I Y ̈ ́;
Η Υ ̈ > I Y ̈;
Η υ ̈ ́ > I y ̈ ́;
Η υ ̈ > I y ̈;
η υ ̈ ́ > i y ̈ ́;
η υ ̈ > i y ̈;
Ο Υ ̈ ́ > O Y ̈ ́;
Ο Υ ̈ > O Y ̈;
Ο υ ̈ ́ > O y ̈ ́;
Ο υ ̈ > O y ̈;
ο υ ̈ ́ > o y ̈ ́;
ο υ ̈ > o y ̈;

Α υ ́ } $mark* $voiced > A ́ v;
Α υ } $mark* $voiced > A v;
Α Υ ́ } $mark* $voiced > A ́ V;
Α Υ } $mark* $voiced > A V;
α υ ́ } $mark* $voiced > a ́ v;
α υ } $mark* $voiced > a v;

Α υ ́ > A ́ f;
Α υ > A f;
Α Υ ́ > A ́ F;
Α Υ > A F;
α υ ́ > a ́ f;
α υ > a f;

Ε υ ́ } $mark* $voiced > E ́ v;
Ε υ } $mark* $voiced > E v;
Ε Υ ́ } $mark* $voiced > E ́ V;
Ε Υ } $mark* $voiced > E V;
ε υ ́ } $mark* $voiced > e ́ v;
ε υ } $mark* $voiced > e v;

Ε υ ́ > E ́ f;
Ε υ > E f;
Ε Υ ́ > E ́ F;
Ε Υ > E F;
ε υ ́ > e ́ f;
ε υ > e f;

Η υ ́ } $mark* $voiced > I ́ v;
Η υ } $mark* $voiced > I v;
Η Υ ́ } $mark* $voiced > I ́ V;
Η Υ } $mark* $voiced > I V;
η υ ́ } $mark* $voiced > i ́ v;
η υ } $mark* $voiced > i v;

Η υ ́ > I ́ f;
Η υ > I f;
Η Υ ́ > I ́ F;
Η Υ > I F;
η υ ́ > i ́ f;
η υ > i f;

Ο υ ́ > O u ́;
Ο υ > O u;
Ο Υ ́ > O U ́;
Ο Υ > O U;
ο υ ́ > o u ́;
ο υ > o u;

Α ι ́ > A i ́;
Α ι > A i;
Α Ι ́ > A I ́;
Α Ι > A I;
α ι ́ > a i ́;
α ι > a i;

Ε ι ́ > E i ́;
Ε ι > E i;
Ε Ι ́ > E I ́;
Ε Ι > E I;
ε ι ́ > e i ́;
ε ι > e i;

Ο ι ́ > O i ́;
Ο ι > O i;
Ο Ι ́ > O I ́;
Ο Ι > O I;
ο ι ́ > o i ́;
ο ι > o i;

Υ ι ́ > Y i ́;
Υ ι > Y i;
Υ Ι ́ > Y I ́;
Υ Ι > Y I;
υ ι ́ > y i ́;
υ ι > y i;

Γ Κ } [:Lowercase_Letter:] > G k;
Γ Κ > G K;
Γ κ > G k;
γ κ > g k;

$boundary { Μ Π > B;
$boundary { Μ π > B;
Μ Π } $boundary > B;
Μ π } $boundary > b;
μ π } $boundary > b;
$boundary { μ π > b;

Μ Π } [:Lowercase_Letter:] > M p;
Μ Π > M P;
Μ π > M p;
μ π > m p;

Ν Τ } [:Lowercase_Letter:] > N t;
Ν Τ > N T;
Ν τ > N t;
ν τ > n t;

Γ Γ } [:Lowercase_Letter:] > N g;
Γ Γ > N G;
Γ γ > N g;
γ γ > n g;

Γ Ξ } [:Lowercase_Letter:] > N k s;
Γ Ξ > N K S;
Γ ξ > N k s;
γ ξ > n k s;

Γ Χ } [:Lowercase_Letter:] > N x;
Γ Χ > N X;
Γ χ > N x;
γ χ > n x;

Τ Σ } [:Lowercase_Letter:] > T s;
Τ Σ > T S;
Τ σ > T s;
Τ ς > T s;
τ σ > t s;
τ ς > t s;

Τ Ζ } [:Lowercase_Letter:] > D z;
Τ Ζ > D Z;
Τ ζ > D z;
τ ζ > d z;

Θ } [:Lowercase_Letter:] > T h;
Θ > T H;
θ > t h;

Ξ } [:Lowercase_Letter:] > K s;
Ξ > K S;
ξ > k s;

Ψ } [:Lowercase_Letter:] > P s;
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
