export const latnEsCaRules = `
::Null;

[:Lu:] { Ľ } [^[:L:][:M:]] > LL;
ľ } [^[:L:][:M:]] > ll;
[:Lu:] { Ľ } [bcdfghjklmnpqrstvwxzçčćđšžBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽǯǮẑẐþÞɣƔŋŊḫḪ] > LL;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽǯǮẑẐþÞɣƔŋŊḫḪ] > ll;
[:Lu:] { Ń } [^[:L:][:M:]] > Ñ;
ń } [^[:L:][:M:]] > ñ;
[:Lu:] { Ń } [bcdfghjklmnpqrstvwxzçčćđšžBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽǯǮẑẐþÞɣƔŋŊḫḪ] > Ñ;
ń } [bcdfghjklmnpqrstvwxzçčćđšžBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽǯǮẑẐþÞɣƔŋŊḫḪ] > ñ;
`;
