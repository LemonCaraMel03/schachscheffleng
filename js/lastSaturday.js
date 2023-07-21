/* Last Saturday */


/**
 * Präziseier 
 *      en Titel (newsTitle), 
 *      en Link (newsLink) [OPTIONAL]
 *      an News Texter (news).
 * 
 * Wichteg!!
 * Zweschen all News Texter muss enupdate_lastsaturday_info() Komma sinn!!!
 * 
 */


/* Datum, Umeldungs Link an Resultater Link */
var datum = "";
var umeldungLink = "";
var resultaterLink = "";








/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_lastsaturday_info() {
    if (datum != "") {
        document.getElementById("datum").innerHTML = '<i class="fa-regular fa-calendar"></i>' + datum;

        if (umeldungLink != "") {
            $("#umeldung").attr("href", umeldungLink);
        } else {
            document.getElementById("umeldung").classList.add("disabled")
        }

        if (resultaterLink != "") {
            $("#resultater").attr("href", resultaterLink);
        } else {
            document.getElementById("resultater").classList.add("disabled")
        }
    } else {
        document.getElementById("datum").innerHTML = '<i class="fa-regular fa-calendar"></i> To be Announced';

        document.getElementById("umeldung").classList.add("disabled")
        document.getElementById("resultater").classList.add("disabled")
    }
}

/*----------------------------------------------------------------------------------------------------------------*/