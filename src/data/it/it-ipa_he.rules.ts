export const itIpaHeRules = `
::Null;

[aeiouɛɔ] { a } > a;
[[:L:]-[aeiouɛɔ]] [jw] { a } > a;
[:L:] { a } [bcdfɡjklmnpɾrstvwxzʃʒʎɲʝθβðɣ] [aeiouɛɔ] [sn]? [^[:L:][:M:]] > aʔ;
`;
