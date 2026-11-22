export const latnTgGlottalRules = `
::Null;

[:Ll:] { ’ } s [^[:L:][:M:]] > ’;
[:Ll:] { ’ } [:Ll:] > \\';
[:Lu:] { ’ } S [^[:L:][:M:]] > ’;
[:Lu:] [:Lu:] { ’ } [:Lu:] > \\';
`;
