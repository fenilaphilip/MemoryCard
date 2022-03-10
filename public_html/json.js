/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let dictionary = [
    {"de": "das Buch", "en": "book"},
    {"de": "das Handy", "en": "phone"},
    {"de": "der Tisch", "en": "table"},
    {"de": "der Stuhl", "en": "chair"},
    {"de": "das Wasser", "en": "water"},
    {"de": "der Computer", "en": "computer"},
    {"de": "die Lampe", "en": "lamp"},
    {"de": "die Blume", "en": "flower"},
    {"de": "der Fernsehen", "en": "telivision"},
    {"de": "das Bild", "en": "picture"},
    {"de": "das Fenster", "en": "window"},
    {"de": "die Tasche", "en": "Bag"},
    {"de": "die CD", "en": "CD"},
    {"de": "die Brille", "en": "spectacles"},
    {"de": "das Heft", "en": "note book"},
    {"de": "der Schlüssel", "en": "key"},
    {"de": "die Tür", "en": "door"},
    {"de": "der USB-Stick", "en": "pendrive"},
    {"de": "der Kugelschreiber", "en": "Ball pen"},
    {"de": "der Kuli", "en": "pen"},
    {"de": "das Worterbuch", "en": "dictionary"},
    {"de": "das Papier", "en": "paper"},
    {"de": "die Flasche", "en": "Bottle"},
    {"de": "die Tafel", "en": "board"},
    {"de": "das Plakat", "en": "poster"},
    {"de": "die Straẞe", "en": "road"},
    {"de": "der Name", "en": "name"},
    {"de": "der Tag", "en": "day"},
    {"de": "die Nachbarn", "en": "neighbour"},
    {"de": "der Garten", "en": "garden"},
    {"de": "die Firma", "en": "company"},
    {"de": "das Buro", "en": "office"},
    {"de": "der Fuẞball", "en": "football"},
    {"de": "das Gemüse", "en": "vegetables"},
    {"de": "die Hochzeit", "en": "wedding"},
    {"de": "der Vater", "en": "father"},
    {"de": "die Mutter", "en": "mother"},
    {"de": "der Burder", "en": "brother"},
    {"de": "die Tochter", "en": "daughter"},
    {"de": "das Kind", "en": "child"}
];


let selected = -1;

function pickUpde() {
    selectcard();
    document.getElementById("show-de").innerHTML = dictionary[selected].de;
    document.getElementById("show-en").innerHTML = "";
}
function pickUpen() {
    document.getElementById("show-en").innerHTML = dictionary[selected].en;

}
function selectcard() {
    selected++;
    if (selected >= dictionary.length) {
        selected = 0;
    }
}
pickUpde();
