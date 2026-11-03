export const huLatnYRules = `
::Null;

[bcdfhjkmprstvwxzčšžBCDFHJKMPRSTVWXZČŠŽǯǮẑẐþÞɣƔḫḪ] { y } [^[:L:][:M:]] > i;
[bcdfhjkmprstvwxzčšžBCDFHJKMPRSTVWXZČŠŽǯǮẑẐþÞɣƔḫḪ] { Y } [^[:L:][:M:]] > I;

::Null;

Þ > T;
þ > t;
`;
