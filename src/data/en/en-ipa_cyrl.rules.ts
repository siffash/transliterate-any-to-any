export const enIpaCyrlRules = `
::Null;

o { ʊ } [bdfɡhklɫmnpɹstvwzʃʒθðŋ]+ [^[:L:][:M:]] > ʊ;
o { ʊ } [ˈˌ]? [bdfɡhklɫmnpɹstvwzʃʒθðŋ] > ;
ɫ } ɫ j > ;
[^[:L:][:M:]] [ˈˌ]? w { [ɑɒæ] > ɔ;
[^[:L:][:M:]] [ˈˌ]? w { a } [^ɪʊ] > ɔ;
`;
