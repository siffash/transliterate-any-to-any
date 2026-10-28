export const latnEsCaRules = `
::Null;

[:Lu:] { Ľ } [^[:L:][:M:]] > LL;
ľ } [^[:L:][:M:]] > ll;
[:Lu:] { Ľ } [bcdfghjklmnpqrstvwxzçčćđšžBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽ] > LL;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽ] > ll;
[:Lu:] { Ń } [^[:L:][:M:]] > Ñ;
ń } [^[:L:][:M:]] > ñ;
[:Lu:] { Ń } [bcdfghjklmnpqrstvwxzçčćđšžBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽ] > Ñ;
ń } [bcdfghjklmnpqrstvwxzçčćđšžBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽ] > ñ;
`;
