export const koLatnRules = `
$double = [jklpst];

[:^Letter:] { ng > ;
$double } $double > ;

::Null;

ch > č;
sh > š;
ae > ä;
eo > o;
eu > ï;
oe > ö;
ui > ïi;
c > k;
j > dž;
w > v;

::Title;
`;
