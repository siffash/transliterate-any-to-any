export { supportedLanguages } from "helpers/languages";
export { Language } from "types";
export { transliterate } from "transliterate";

// *** EXPERIMENTS ***

import { transliterate } from "transliterate";
import { RBT } from "icu-transliterator";
import { kkLatnRules } from "constants/kk-latn.rules";
const test = async () => {
  // console.log(
  //   await transliterate(
  //     `Αθήνα, Θεσσαλονίκη, Πάτρα, Ηράκλειο, Λάρισα, Βόλος, Ιωάννινα, Καλαμάτα, Χανιά, Ρόδος, Κέρκυρα, Μύκονος, Θήρα, Κρήτη, Μακεδονία, Πελοπόννησος, Όλυμπος, Σπάρτη, Δελφοί, Μυκήνες, Ιωάννης Γεώργιος Παπαδόπουλος, Μαρία Ελένη Παπαδοπούλου, Νικόλαος Δημήτριος Καραγιάννης, Αικατερίνη Χριστίνα Κωνσταντίνου, Γεώργιος Αντώνιος Στεφανίδης, Ελένη Βασιλική Παπαδοπούλου, Δημήτριος Ιωάννης Ανδρέου, Σοφία Γεωργία Λαμπράκη, Χριστίνα Παυλίνα Δημητρίου, Αντώνιος Μιχαήλ Κυριακίδης, Άννα Κωνσταντίνα Βασιλείου, Κωνσταντίνος Σταύρος Παπακωνσταντίνου, Βασιλική Ιωάννα Μιχαηλίδου, Πέτρος Αθανάσιος Γεωργιάδης, Φωτεινή Νικολέτα Παναγιώτου, Σταύρος Δημήτριος Λαζαρίδης, Αθανασία Μαρία Καραγιάννη, Μιχαήλ Παύλος Χατζηδάκης, Ειρήνη Αντωνία Σταματίου, Αλέξανδρος Γεώργιος Αλεξάνδρου, Εθνική Τράπεζα της Ελλάδος, Τράπεζα Πειραιώς, Ελληνικά Πετρέλαια, Δημόσια Επιχείρηση Ηλεκτρισμού, Οργανισμός Τηλεπικοινωνιών Ελλάδος, Ελληνική Εταιρεία Αεροπορικών Μεταφορών, Εταιρεία Ύδρευσης και Αποχέτευσης Αθηνών, Εθνική Ασφαλιστική Εταιρεία, Ελληνική Εταιρεία Φυσικού Αερίου, Οργανισμός Λιμένων Πειραιώς, Ελληνική Βιομηχανία Τροφίμων και Ποτών, Εταιρεία Παραγωγής και Εμπορίας Φαρμάκων, Τράπεζα Αττικής, Εθνική Εταιρεία Κατασκευής Αυτοκινήτων, Οργανισμός Σιδηροδρόμων Ελλάδος, Εταιρεία Ανάπτυξης Τεχνολογίας Πληροφορικής, Ασφαλιστική Εταιρεία Ευρώπη, Βιομηχανική Εταιρεία Επεξεργασίας Μετάλλων, Ελληνική Εταιρεία Ναυτιλίας και Μεταφορών, Εθνική Εταιρεία Ανανεώσιμων Πηγών Ενέργειας
  // `,
  //     { from: "el", to: "en" },
  //   ),
  // );
  // console.log(
  //   RBT.fromRules(kkLatnRules)
  //     .transliterate(`Alakól, Balqaş, Kökşetau, Ulytau, Baianauyl, Mañğystau, Zaiysan, Qyzylorda, Jetisu, Saryarqa, Temirtau, Shardara, Qarqaraly, Merkí, Qatunqarğai, Atasu, Üştöbe, Jarkent, Alatau, Maibalyq, Arman Seríkuly Bolatov, Dana Muratqyzy Sakenova, Bauyrjan Erjanuly Amanov, Gùlnar Bolatqyzy Isajonova, Ruslan Aslanuly Qairatov, Aigùl Janatqyzy Omarova, Marat Sùleimenuly Ahmedov, Janar Aidarqyzy Beisenova, Timur Erbolatuly Jùsípov, Meruert Qanatqyzy Seríkova, Oljas Muratuly Ismailov, Saule Beríkqyzy Hasanova, Darhan Nurlanuly Saparov, Tolqyn Talatqyzy Alieva, Esen Bolatuly Qydyrov, Saltanat Asqarqyzy Temírova, Nurdaulet Erjanuly Batyrov, Ämína Diasqyzy Joldasova, Bekzat Maratuly Nurjanov, Gauhar Alíqyzy Maqsutova, Qazaqstan Temír Joly, Almaty Qurylys Kompaniasy, Astana Baiterek Holdingi, Kaspi Bank Aktsionerlìk Qoğamy, Nomad Saqtandyru Ortalyğy, Barys Hokkei Kluby, Samruq Qazyna Qory, Qazaqtelekom Bailanys Operatory, Kúitai Jer Resurstary, Dalatrans Jùk Tasymaldaýşy, Alma TV Televizia Jelìsì, Magnum Retail Sauda Jelìsì, Air Astana Äue Kompaniasy, Qazaqoil Energetika Korporasiasy, Bi Group Qurylys Holdingi, Techno Dom Elekronika Dùkenì, Sulpak Turmystyq Tehnika, Kazatomprom Atom Óndìrìsì, Beeline Mobil Baky qyzmetì, Halyk Bank Halyqtyq Jinaq Bankì
  // `),
  // );
};
test();
