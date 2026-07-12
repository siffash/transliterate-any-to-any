export { transliterate } from "transliterate";
export { scripts, languages } from "helpers/constants";
export { confirmLanguageByScript } from "helpers/confirmLanguageByScript";
export { Script, Language } from "types";

// *** EXPERIMENTS ***

const test = async () => {
  const { RBT } = await import("icu-transliterator");
  const { csLatnRules } = await import("constants/cs-latn.rules");

  console.log(
    RBT.fromRules(csLatnRules).transliterate(
      "Praha, Brno, Ostrava, Plzeň, Liberec, Olomouc, České Budějovice, Hradec Králové, Ústí nad Labem, Pardubice, Havířov, Zlín, Kladno, Most, Karlovy Vary, Opava, Frýdek-Místek, Jihlava, Teplice, Karviná, Jan Jakub Novák, Petr Antonín Svoboda, Martin Pavel Novotný, Tomáš Jaroslav Dvořák, František Jiří Černý, Václav Josef Procházka, Michal Karel Kučera, Jaroslav Milan Veselý, Ludvík Filip Horák, Zdeněk Štěpán Němec, Marek Bedřich Pokorný, David Šimon Marek, Jakub Adam Pospíšil, Stanislav Robert Hájek, Roman Viktor Jelínek, Ondřej Matěj Král, Vít Samuel Růžička, Lukáš Tobiáš Beneš, Aleš Kristián Fiala, Igor Gabriel Sedláček, Škoda Auto, ČEZ, Agrofert, Kofola ČeskoSlovensko, Energetický a průmyslový holding, Severočeské doly, Moravské naftové doly, Pražská energetika, Česká zbrojovka, Budějovický Budvar, Plzeňský Prazdroj, Vítkovice Steel, Třinecké železárny, Ostravské opravny a strojírny, Česká pošta, České dráhy, Správa železnic, Juta Dvůr Králové, Hamé Babice, Tatra Trucks",
    ),
  );
  console.log("\n");
};
test();
