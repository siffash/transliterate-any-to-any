export const latnSlavicNjRules = `
::Null;

[:Lu:] { Ń } [^[:L:][:M:]] > ŃY;
ń } [^[:L:][:M:]] > ńy;
[:Lu:] { Ń } [bcdfghklmnpqrstvwxzčćđšžBCDFGHKLMNPQRSTVWXZČĆĐŠŽ] > ŃY;
ń } [bcdfghklmnpqrstvwxzčćđšžBCDFGHKLMNPQRSTVWXZČĆĐŠŽ] > ńy;
`;
