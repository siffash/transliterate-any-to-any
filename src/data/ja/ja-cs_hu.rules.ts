export const jaCsHuRules = `
::Lower;

n { ’ > ;

[^[:L:][:M:]] { ss > sz;
[^[:L:][:M:]] { šš > s;
[^[:L:][:M:]] { čč > cs;

ss > ssz;
šš > ss;
s > sz;
š > s;
čč > ccs;
č > cs;
ž > zs;
w > v;
oo > ó;

::Title;

[:L:] { ' ' Ku } [^[:L:][:M:]] > '-ku';
`;
