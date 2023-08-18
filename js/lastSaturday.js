/* Last Saturday */


/**
 * Pr채ziseier 
 *      en Datum (datum), 
 *      en Umeldungs Link (umeldungsLink) [OPTIONAL]
 *      an en Info Link (infoLink) [OPTIONAL].
 * 
 */


/* Datum, Umeldungs Link an Info Link */
var datum = "16. September 2023 - U8-U10-U12";
var umeldungLink = "https://forms.gle/2n34kR8JGroqiqPj7";
var infoLink = "https://drive.google.com/drive/folders/1eoGUZVtZHGHyPKXhuzjRRWKne1mlgkad?usp=drive_link";








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

        if (infoLink != "") {
            $("#info").attr("href", infoLink);
        } else {
            document.getElementById("info").classList.add("disabled")
        }
    } else {
        document.getElementById("datum").innerHTML = '<i class="fa-regular fa-calendar"></i> To be Announced';

        document.getElementById("umeldung").classList.add("disabled")
        document.getElementById("info").classList.add("disabled")
    }
}

/*----------------------------------------------------------------------------------------------------------------*/