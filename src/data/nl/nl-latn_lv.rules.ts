export const nlLatnLvRules = `
::NFC;

a [aA] > ā;
A [aA] > Ā;

e [eE] } [^[:L:][:M:]] > ee;
E [eE] } [^[:L:][:M:]] > EE;

e [eE] > ē;
E [eE] > Ē;

o [oO] } [iI] > oo;
O [oO] } [iI] > OO;

o [oO] > o;
O [oO] > O;

u [uU] > ū;
U [uU] > Ū;

o [eE] } [iI] > oe;
O [eE] } [iI] > OE;

o [eE] > ū;
O [eE] > Ū;

ie } [uU] > ie;
Ie } [uU] > Ie;
iE } [uU] > iE;
IE } [uU] > IE;

i [eE] > ī;
I [eE] > Ī;
`;
