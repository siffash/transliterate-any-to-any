export const latnSlavicNjRules = `
::Null;

[:Lu:] { Ń } [^[:L:][:M:]] > ŃY;
ń } [^[:L:][:M:]] > ńy;
[:Lu:] { Ń } [bcdfghklmnpqrstvwxzčćđšžBCDFGHKLMNPQRSTVWXZČĆĐŠŽǯǮẑẐþÞɣƔŋŊḫḪ] > ŃY;
ń } [bcdfghklmnpqrstvwxzčćđšžBCDFGHKLMNPQRSTVWXZČĆĐŠŽǯǮẑẐþÞɣƔŋŊḫḪ] > ńy;
`;
