/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let card = {
    "dictionary": [
        {"de": "buch", "en": "book"},
        {"de": "handy", "en": "phone"},
        {"de": "tisch", "en": "table"},
        {"de": "stuhl", "en": "chair"},
        {"de": "wasser", "en": "water"}
    ]
};


let selected = -1;

function pickUpde() {
    selectcard();
    document.getElementById("show-de").innerHTML = card.dictionary[selected].de;

}
function pickUpen() {
    document.getElementById("show-en").innerHTML = card.dictionary[selected].en;

}
function selectcard() {
    selected++;
    if (selected >= card.dictionary.length) {
        selected = 0;
    }
}
