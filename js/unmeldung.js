/**
 * Präziseier en Titel and en Link fir all Unmeldungs - Element.
 * 
 * Den Titel geseit een dono op dem Website. 
 * Den Link ass wat den User dono zu dem Document brengt wou heen sech kann unmellen.
 * 
 * All Element an der Lëscht muss esou ausgesinn:
 * 
 *      "  Titel  "  :  "  Link  "  ,
 * 
 * Wichteg!!
 * Ganz zum Schluss, hannert deem leschten Element däerf KEEN Komma sinn !!!
 * 
 */


const unmeldung = {

    /* Titel */                         /* Link */
    "InterClub Championat":             "#",
    "Club Championat":                  "#"

}







/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_unmeldung() {
    if (Object.keys(unmeldung).length != 0) {

        var content = "";
        for (const [title, link] of Object.entries(unmeldung)) {
            content += '<li><a class="dropdown-item" href="' + link + '">' + title + '</a></li>';
        }
        
        document.getElementById("unmeldung").innerHTML = content;
    } else {
        document.getElementById("unmeldung").innerHTML = '<li><a class="dropdown-item">none available</a></li>';
    };
}

/*----------------------------------------------------------------------------------------------------------------*/