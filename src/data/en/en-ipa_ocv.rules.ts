export const enIpaOcvRules = `
::Null;

o { ʊ } [bdfɡhklɫmnpɹstvwzʃʒθðŋ]+ [^[:L:][:M:]] > ʊ;
o { ʊ } [ˈˌ]? [bdfɡhklɫmnpɹstvwzʃʒθðŋ] > ;
o { ɷ } [ˈˌ]? w > ;
`;
