export { transliterate } from "./transliterate";
export { type Script, type Language } from "./types";
export { scripts, languages } from "helpers/constants";
export { confirmLanguageByScript } from "helpers/confirmLanguageByScript";

// *** EXPERIMENTS ***

const test = async () => {
  // console.log(
  //   RBT.fromRules(esIpaRules).transliterate(
  //     "Santiago de Compostela, Sierra Nevada, Islas Canarias, Picos de Europa, Costa Brava, San Sebastián, Puerto del Rosario, Valle de Arán, Los Alcázares, Castellar de la Frontera, Arganda del Rey, Alcalá de Henares, Jerez de la Frontera, Molina de Segura, Talavera de la Reina, Santa Cruz de Tenerife, Vitoria Gasteiz, Mérida, Cuenca, Logroño, Alejandro Gabriel Rodríguez García, María Fernanda Martínez López, Juan Carlos Sánchez Ramírez, Elena Beatriz Torres Morales, Francisco Javier Ruiz Herrera, Claudia Isabel Jiménez Castro, Ricardo Andrés Ortiz Vargas, Sofía Alejandra Navarro Reyes, Gabriel Antonio Castro Paredes, Lucía Valentina Romero Méndez, Manuel Eduardo Flores Delgado, Adriana Patricia Silva Guerrero, Jorge Luis Mendoza Ibáñez, Natalia Victoria Peralta Soto, Roberto Sebastián Núñez Vega, Daniela Estefanía Ortega Rojas, Miguel Ángel Ramos Villanueva, Rosa María Campos Gallegos, Fernando Agustín Medina Suero, Silvia Raquel Aguilar Espinoza, Telefónica de España, Banco Santander Central Hispano, Petróleos Mexicanos, Construcciones y Auxiliar de Ferrocarriles, Ferrovial Construcción, Iberia Líneas Aéreas de España, Mapfre Seguros Generales, Inditex Industrias de Diseño Textil, Repsol Petróleo, Aceros de México, Transportes Aéreos Portugueses, Alimentos del Mediterráneo, Editorial Planeta, Seguros Catalana Occidente, Inmobiliaria Colonial, Cervecería Cuauhtémoc Moctezuma, Distribuidora Internacional de Alimentación, Gas Natural Fenosa, Abengoa Energía Solar, Logística de Transportes Ferroviarios",
  //   ),
  // );
  // const getTranslit = async () =>
  //   await transliterate(
  //     "Lisboa, Porto, Coimbra, Braga, Évora, Guimarães, Aveiro, Viseu, Santarém, Bragança, Castelo Branco, Portalegre, Beja, Faro, Funchal, Ponta Delgada, Setúbal, Vila Real, Guarda, Viana do Castelo, Afonso Henrique Ferreira, Beatriz Maria Santos, Carlos Eduardo Oliveira, Daniela Filipa Matos, Emanuel José Silva, Fernanda Rosa Costa, Gabriel Luís Pereira, Helena Sofia Martins, Isaac Manuel Sousa, Joana Rita Almeida, Kevin Alexandre Rocha, Luísa Maria Carvalho, Miguel Angelo Ribeiro, Nádia Patrícia Gomes, Otávio Augusto Neves, Paulo Jorge Machado, Raquel Antónia Lopes, Sebastião Nuno Duarte, Teresa Cristina Vale, Vicente Manuel Ramos, Petróleos de Portugal, Banco Comercial Português, Companhia de Seguros Fidelidade, Transportes Aéreos Portugueses, Caixa Geral de Depósitos, Distribuição Alimentar Jerónimo Martins, Corticeira Amorim Sociedade Gestora, Indústria de Motores Elétricos, Energias de Portugal, Sonae Investimentos Comerciais, Navegação Aérea de Portugal, Cimentos de Portugal, Correios de Portugal, Telecomunicações de Portugal, Imprensa Nacional Casa da Moeda, Estaleiros Navais de Viana do Castelo, Portos e Caminhos de Ferro, Sociedade Independente de Comunicação, Rádio e Televisão de Portugal, Logística de Transportes Marítimos",
  //     { from: "pt", to: "sv" },
  //   );
  // settings.JS_IMPLEMENTATION = false;
  // const cpp = await getTranslit();
  // settings.JS_IMPLEMENTATION = true;
  // const js = await getTranslit();
  // if (JSON.stringify(cpp) === JSON.stringify(js)) {
  //   console.log("IDENTICAL!");
  //   console.log(cpp);
  // } else {
  //   console.log("_NOT_ IDENTICAL!");
  //   console.log(cpp);
  //   console.log(js);
  // }
};
test();
