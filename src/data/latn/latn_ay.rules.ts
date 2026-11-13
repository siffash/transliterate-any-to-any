export const latnAyRules = `
::Null;

[aeouAEOU] { i } [^[:L:][:M:]] > y;
[aeouAEOU] { I } [^[:L:][:M:]] > Y;

[aeouAEOU] { i } [bcdfghklmnpqrstvwxzčšžBCDFGHKLMNPQRSTVWXZČŠŽ] > y;
[aeouAEOU] { I } [bcdfghklmnpqrstvwxzčšžBCDFGHKLMNPQRSTVWXZČŠŽ] > Y;
`;
