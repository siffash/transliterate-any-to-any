export const deLatnLvLongRules = `
::Null;

[aeiouäöüAEIOUÄÖÜ] [^aeiouäöüAEIOUÄÖÜ[^[:L:][:M:]]]+ { ie } [nN] > ie;
[aeiouäöüAEIOUÄÖÜ] [^aeiouäöüAEIOUÄÖÜ[^[:L:][:M:]]]+ { Ie } [nN] > Ie;
[aeiouäöüAEIOUÄÖÜ] [^aeiouäöüAEIOUÄÖÜ[^[:L:][:M:]]]+ { iE } [nN] > iE;
[aeiouäöüAEIOUÄÖÜ] [^aeiouäöüAEIOUÄÖÜ[^[:L:][:M:]]]+ { IE } [nN] > IE;

i [eE] > ī;
I [eE] > Ī;

[iü] [hH] } [^aeiouäöüAEIOUÄÖÜ] > ī;
[IÜ] [hH] } [^aeiouäöüAEIOUÄÖÜ] > Ī;

a [aA] > ā;
A [aA] > Ā;

a [hH] } [^aeiouäöüAEIOUÄÖÜ] > ā;
A [hH] } [^aeiouäöüAEIOUÄÖÜ] > Ā;

e [eE] > ē;
E [eE] > Ē;

e [hH] } [^aeiouäöüAEIOUÄÖÜ] > ē;
E [hH] } [^aeiouäöüAEIOUÄÖÜ] > Ē;

u [hH] } [^aeiouäöüAEIOUÄÖÜ] > ū;
U [hH] } [^aeiouäöüAEIOUÄÖÜ] > Ū;

ö [hH] } [^aeiouäöüAEIOUÄÖÜ] > öö;
Ö [hH] } [^aeiouäöüAEIOUÄÖÜ] > ÖÖ;
`;
