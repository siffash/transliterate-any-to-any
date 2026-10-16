export const koLatnRules = `
::Lower;
::NFC;

０ > 0;
１ > 1;
２ > 2;
３ > 3;
４ > 4;
５ > 5;
６ > 6;
７ > 7;
８ > 8;
９ > 9;

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

k { k+ > ;
t { t+ > ;
p { p+ > ;
s { s+ > ;
j { j+ > ;
l { l+ > ;
c { c+ > ;

s } [iyü] > š;
n } [iyü] > ń;
l } [iyü] > ľ;

ch > č;
sh > š;
c > k;
j > dž;

::Title;
`;
