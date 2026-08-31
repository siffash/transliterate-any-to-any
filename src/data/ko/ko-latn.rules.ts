export const koLatnRules = `
::Lower;
::NFC;

[^[:L:][:M:]] { ng > ;

wae > wä;
yae > yä;
ae > ä;
eo > o;
eu > ï;
oe > ö;
ui > ïi;
wi > ü;

::Null;

k } k > ;
t } t > ;
p } p > ;
s } s > ;
j } j > ;
l } l > ;
c } c > ;

s } [iyü] > š;
n } [iyü] > ń;
l } [iyü] > ľ;

ch > č;
sh > š;
c > k;
j > dž;

::Title;
`;
