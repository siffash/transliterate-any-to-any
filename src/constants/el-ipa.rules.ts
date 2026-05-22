export const elIpaRules = `
::Lower;
::NFC;
$boundary = [:^Letter:];
$voicedC = [βγδζλμνρbdgɟʝŋmnlɾvðɣz];
$vowOrVoiced = [αεηιουωάέήίόύώϊϋΐΰβγδζλμνρaɛiɔu];
$frontVowel = [εηιυέήίύϊϋΐΰɛi];

αί > έ;
έι > ί;
εί > ί;
όι > ί;
οί > ί;
ού > ˈu;
ύι > ί;
υί > ί;

αι > ɛ;
ει > i;
οι > i;
ου > u;
υι > i;

{ αύ } $vowOrVoiced > άv;
αύ > άf;
{ αυ } $vowOrVoiced > av;
αυ > af;

{ εύ } $vowOrVoiced > έv;
εύ > έf;
{ ευ } $vowOrVoiced > ɛv;
ευ > ɛf;

{ ηύ } $vowOrVoiced > ίv;
ηύ > ίf;
{ ηυ } $vowOrVoiced > iv;
ηυ > if;

::Null;

$boundary { μπ } > b;
μπ > mb;

$boundary { ντ } > d;
ντ > nd;

$boundary { γκ } $frontVowel > ɟ;
$boundary { γκ } > g;
{ γκ } $frontVowel > ŋɟ;
γκ > ŋg;

{ γγ } $frontVowel > ŋɟ;
γγ > ŋg;

{ γχ } $frontVowel > ŋç;
γχ > ŋx;

τζ > dz;
τσ > ts;

{ κ } $frontVowel > c;
{ γ } $frontVowel > ʝ;
{ χ } $frontVowel > ç;

ββ > v;
κκ > k;
λλ > l;
μμ > m;
νν > n;
ππ > p;
ρρ > ɾ;
σσ > s;
ττ > t;

{ σ } $voicedC > z;
{ ς } $boundary $voicedC > z;
σ > s;
ς > s;

β > v;
γ > ɣ;
δ > ð;
ζ > z;
θ > θ;
κ > k;
λ > l;
μ > m;
ν > n;
ξ > ks;
π > p;
ρ > ɾ;
τ > t;
φ > f;
χ > x;
ψ > ps;

ά > ˈa;
έ > ˈɛ;
ή > ˈi;
ί > ˈi;
ό > ˈɔ;
ύ > ˈi;
ώ > ˈɔ;
ΐ > ˈi;
ΰ > ˈi;

ϊ > i;
ϋ > i;

α > a;
ε > ɛ;
η > i;
ι > i;
ο > ɔ;
υ > i;
ω > ɔ;

::Null;

$vowSyn = [a ɛ ɔ u];

n i ˈ } $vowSyn > ˈɲ;
l i ˈ } $vowSyn > ˈʎ;
ʝ i ˈ } $vowSyn > ˈʝ;
ç i ˈ } $vowSyn > ˈç;
c i ˈ } $vowSyn > ˈc;

n i } $vowSyn > ɲ;
l i } $vowSyn > ʎ;
ʝ i } $vowSyn > ʝ;
ç i } $vowSyn > ç;
c i } $vowSyn > c;
`;
