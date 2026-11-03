export const latnBsRules = `
::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { Ẑ > DZ;
Ẑ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DZ;
Ẑ } [:Lu:] > DZ;
Ẑ > Dz;
ẑ > dz;

[:Lu:] { Ǯ > DŽ;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DŽ;
Ǯ } [:Lu:] > DŽ;
Ǯ > Dž;
ǯ > dž;

::Null;

[Čč] { [Čč] > ;
[Dd] [Žž] { [Dd] [Žž] > ;

Þ > T;
þ > t;

Ɣ > G;
ɣ > g;

Ḫ > H;
ḫ > h;

IJ > EJ;
Ij > Ej;
iJ > eJ;
ij > ej;

::Null;

[^[:L:][:M:]] { I } [AaÄäEeOoÖöUuÜüŸÿ] > J;
[^[:L:][:M:]] { i } [AaÄäEeOoÖöUuÜüŸÿ] > j;

Ľ } [Jj] > L;
ľ } [Jj] > l;
[:Lu:] { Ľ > LJ;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

Ń } [Jj] > N;
ń } [Jj] > n;
[:Lu:] { Ń > NJ;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

I } [aeu] > Ij;
i } [AEU] > iJ;
I } [AEU] > IJ;
i } [aeu] > ij;

[ÄÖ] > E;
[äö] > e;
[ÜŸ] > U;
[üÿ] > u;
Ï > I;
ï > i;
Q > K;
q > k;
W > V;
w > v;
X > H;
x > h;
Y > J;
y > j;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;



::Null;

[^[:L:][:M:]] { I } [AaEeOoUu] > J;
[^[:L:][:M:]] { i } [AaEeOoUu] > j;

I } [aeu] > Ij;
i } [AEU] > iJ;
I } [AEU] > IJ;
i } [aeu] > ij;

[ČčĆćĐđŠšŽž] { [jJ] > ;

[Bb] { [Bb]+ > ;
[Cc] { [Cc]+ > ;
[Čč] { [Čč]+ > ;
[Ćć] { [Ćć]+ > ;
[Dd] { [Dd]+ > ;
[Đđ] { [Đđ]+ > ;
[Ff] { [Ff]+ > ;
[Gg] { [Gg]+ > ;
[Hh] { [Hh]+ > ;
[Jj] { [Jj]+ > ;
[Kk] { [Kk]+ > ;
[Ll] { [Ll]+ > ;
[Mm] { [Mm]+ > ;
[Nn] { [Nn]+ > ;
[Pp] { [Pp]+ > ;
[Qq] { [Qq]+ > ;
[Rr] { [Rr]+ > ;
[Ss] { [Ss]+ > ;
[Šš] { [Šš]+ > ;
[Tt] { [Tt]+ > ;
[Vv] { [Vv]+ > ;
[Ww] { [Ww]+ > ;
[Xx] { [Xx]+ > ;
[Yy] { [Yy]+ > ;
[Zz] { [Zz]+ > ;
[Žž] { [Žž]+ > ;
`;
