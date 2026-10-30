export const huLatnYRules = `
::Null;

[bcdfhjkmprstvwxzčšžBCDFHJKMPRSTVWXZČŠŽ] { y } [^[:L:][:M:]] > i;
[bcdfhjkmprstvwxzčšžBCDFHJKMPRSTVWXZČŠŽ] { Y } [^[:L:][:M:]] > I;

::Null;

[tT] { [hH] } [^[:L:][:M:]] > ;
[tT] { [hH] } [iI] [^[:L:][:M:]] > ;
[tT] { [hH] } [yY] > ;
[^[:L:][:M:]] [tT] { [hH] > ;
`;
