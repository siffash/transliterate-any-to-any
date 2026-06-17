export { supportedLanguages } from "helpers/languages";
export { Language } from "types";
export { transliterate } from "transliterate";

// *** EXPERIMENTS ***

import { transliterate } from "transliterate";
import { RBT } from "icu-transliterator";
import { idLatnRules } from "constants/id-latn.rules";
const test = async () => {
  // console.log(
  //   await transliterate(
  //     `Αθήνα, Θεσσαλονίκη, Πάτρα, Ηράκλειο, Λάρισα, Βόλος, Ιωάννινα, Καλαμάτα, Χανιά, Ρόδος, Κέρκυρα, Μύκονος, Θήρα, Κρήτη, Μακεδονία, Πελοπόννησος, Όλυμπος, Σπάρτη, Δελφοί, Μυκήνες, Ιωάννης Γεώργιος Παπαδόπουλος, Μαρία Ελένη Παπαδοπούλου, Νικόλαος Δημήτριος Καραγιάννης, Αικατερίνη Χριστίνα Κωνσταντίνου, Γεώργιος Αντώνιος Στεφανίδης, Ελένη Βασιλική Παπαδοπούλου, Δημήτριος Ιωάννης Ανδρέου, Σοφία Γεωργία Λαμπράκη, Χριστίνα Παυλίνα Δημητρίου, Αντώνιος Μιχαήλ Κυριακίδης, Άννα Κωνσταντίνα Βασιλείου, Κωνσταντίνος Σταύρος Παπακωνσταντίνου, Βασιλική Ιωάννα Μιχαηλίδου, Πέτρος Αθανάσιος Γεωργιάδης, Φωτεινή Νικολέτα Παναγιώτου, Σταύρος Δημήτριος Λαζαρίδης, Αθανασία Μαρία Καραγιάννη, Μιχαήλ Παύλος Χατζηδάκης, Ειρήνη Αντωνία Σταματίου, Αλέξανδρος Γεώργιος Αλεξάνδρου, Εθνική Τράπεζα της Ελλάδος, Τράπεζα Πειραιώς, Ελληνικά Πετρέλαια, Δημόσια Επιχείρηση Ηλεκτρισμού, Οργανισμός Τηλεπικοινωνιών Ελλάδος, Ελληνική Εταιρεία Αεροπορικών Μεταφορών, Εταιρεία Ύδρευσης και Αποχέτευσης Αθηνών, Εθνική Ασφαλιστική Εταιρεία, Ελληνική Εταιρεία Φυσικού Αερίου, Οργανισμός Λιμένων Πειραιώς, Ελληνική Βιομηχανία Τροφίμων και Ποτών, Εταιρεία Παραγωγής και Εμπορίας Φαρμάκων, Τράπεζα Αττικής, Εθνική Εταιρεία Κατασκευής Αυτοκινήτων, Οργανισμός Σιδηροδρόμων Ελλάδος, Εταιρεία Ανάπτυξης Τεχνολογίας Πληροφορικής, Ασφαλιστική Εταιρεία Ευρώπη, Βιομηχανική Εταιρεία Επεξεργασίας Μετάλλων, Ελληνική Εταιρεία Ναυτιλίας και Μεταφορών, Εθνική Εταιρεία Ανανεώσιμων Πηγών Ενέργειας
  // `,
  //     { from: "el", to: "en" },
  //   ),
  // );
  console.log(
    RBT.fromRules(idLatnRules)
      .transliterate(`Bukittinggi, Jayapura, Singkawang, Pangkalpinang, Banjarbaru, Samarinda, Mojokerto, Palangkaraya, Gorontalo, Prabumulih, Payakumbuh, Tomohon, Banda Aceh, Pematangsiantar, Tasikmalaya, Purwokerto, Salatiga, Probolinggo, Denpasar, Parepare, Aditya Pratama Wijaya, Budi Santoso Kusuma, Citra Lestari Putri, Dedi Hermawan Saputra, Eka Ramadhan Putra, Fajar Nugraha Setiawan, Gita Permata Sari, Hendra Kurniawan Bakrie, Indah Wahyuni Susilo, Joko Prasetyo Utomo, Kartika Chandra Kirana, Lukman Hakim Mansyur, Maya Indah Permadi, Nurul Hidayah Azahra, Oscar Panji Gumilang, Putu Gede Artawan, Rina Amalia Nasution, Surya Dharma Ali, Tiara Kasih Sucipto, Wisnu Wardhana Putra, Dirgantara Perkasa Sejahtera, Nusantara Makmur Abadi, Cahaya Matahari Terang, Samudra Biru Indonesia, Gunung Hijau Lestari, Angkasa Raya Logistik, Pangan Sehat Utama, Bangun Desa Mandiri, Kencana Emas Murni, Teknologi Digital Maju, Bakti Pertiwi Persada, Sinar Jaya Konstruksi, Bintang Timur Niaga, Armada Lautan Luas, Kreasi Anak Bangsa, Sumber Energi Alam, Jasa Mulia Teknik, Inti Sari Keramik, Pelangi Indah Tekstil, Wahana Transportasi Cepat
  `),
  );
};
test();
