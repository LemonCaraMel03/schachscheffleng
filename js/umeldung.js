/* Lëscht vun Umeldungen */


/**
 * Präziseier en Titel and en Link fir all Umeldungs - Element.
 * 
 * Den Titel geseit een dono op dem Website. 
 * Den Link ass wat den User dono zu dem Document brengt wou heen sech kann unmellen.
 * 
 * All Element an der Lëscht muss esou ausgesinn:
 * 
 *      "  Titel  "  :  "  Link  "
 * 
 * Wichteg!!
 * Zweschen all Elementer muss en Komma sinn!!!
 * 
 */


const Umeldung = {

    /* Titel */                         /* Link */
    "InterClub Championnat":             "#",
    "Club Championnat":                  "#",

}







/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_Umeldung() {
    if (Object.keys(Umeldung).length != 0) {

        var content = "";
        for (const [title, link] of Object.entries(Umeldung)) {
            content += '<li><a class="dropdown-item" href="' + link + '">' + title + '</a></li>';
        }
        
        document.getElementById("Umeldung").innerHTML = content;
    } else {
        document.getElementById("Umeldung").innerHTML = '<li><a class="dropdown-item">none available</a></li>';
    };
}

/*----------------------------------------------------------------------------------------------------------------*/