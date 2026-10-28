export const latnSlavicLjRules = `
::Null;

[:Lu:] { Ľ } [^[:L:][:M:]] > ĽY;
ľ } [^[:L:][:M:]] > ľy;
[:Lu:] { Ľ } [bcdfghklmnpqrstvwxzčćđšžBCDFGHKLMNPQRSTVWXZČĆĐŠŽ] > ĽY;
ľ } [bcdfghklmnpqrstvwxzčćđšžBCDFGHKLMNPQRSTVWXZČĆĐŠŽ] > ľy;
`;
