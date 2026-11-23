export const enIpaRuRules = `
::Null;

[^[:L:][:M:]] [ˈˌ]? { j } [eɛ] > й;
[ʒʃçɕʂ] { æ > е;
[bcdfgɡhklmnpqrstvwxzɹɾrlɫθðŋ] { æ > a;
[bcdfgɡhklmnpqrstvwxzɹɾrlɫθðŋ] [ˈˌ]? { ɛ } ɹ [ˈˌ]? [bcdfɡɟhjklɫmnpstvwzʃʒθðŋу] > э;
[bcdfgɡhklmnpqrstvwxzɹɾrlɫθðŋ] [ˈˌ]? { ɛ } ɹ [^[:L:][:M:]] > э;

::Null;

[θð] > t;
`;
