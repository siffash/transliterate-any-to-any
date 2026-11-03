export const latnSlavicLjRules = `
::Null;

[:Lu:] { Ľ } [^[:L:][:M:]] > ĽY;
ľ } [^[:L:][:M:]] > ľy;
[:Lu:] { Ľ } [bcdfghklmnpqrstvwxzčćđšžBCDFGHKLMNPQRSTVWXZČĆĐŠŽǯǮẑẐþÞɣƔŋŊḫḪ] > ĽY;
ľ } [bcdfghklmnpqrstvwxzčćđšžBCDFGHKLMNPQRSTVWXZČĆĐŠŽǯǮẑẐþÞɣƔŋŊḫḪ] > ľy;
`;
