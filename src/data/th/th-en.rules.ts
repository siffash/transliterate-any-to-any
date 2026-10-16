export const thEnRules = `
::NFC;

๐ > 0;
๑ > 1;
๒ > 2;
๓ > 3;
๔ > 4;
๕ > 5;
๖ > 6;
๗ > 7;
๘ > 8;
๙ > 9;

[:Thai:] > ;



::Null;

w { w+ > ;
y { y+ > ;
h { h+ > ;
[iy] { [iy]+ } [^[:L:][:M:]] > ;
[^[:L:][:M:]] { c+ } k > ;

::Null;

k { k+ } h > ;
g { g+ } h > ;

::Title;
`;
