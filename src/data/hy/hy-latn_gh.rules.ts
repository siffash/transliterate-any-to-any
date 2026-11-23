export const hyLatnGhRules = `
::Null;

ɣ } [bB] [yY] [uU] [rR] > x;
Ɣ } [bB] [yY] [uU] [rR] > X;

[xX] { b } [yY] [uU] [rR] > p;
[xX] { B } [yY] [uU] [rR] > P;

ɣ } [^[:L:][:M:]] > x;
Ɣ } [^[:L:][:M:]] > X;

ɣ } [ptkcćčsšfxhPTKCĆČSŠFXH] > x;
Ɣ } [ptkcćčsšfxhPTKCĆČSŠFXH] > X;

::Null;

[aeiouəAEIOUƏ] { [hH] } [aeiouəAEIOUƏ] > ;

::Null;

[^[:L:][:M:]] { H ([aeiouə]) > &Any-Upper($1);
[^[:L:][:M:]] { [hH] } [aeiouəAEIOUƏ] > ;
`;
