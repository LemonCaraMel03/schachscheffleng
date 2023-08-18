/* Chess Open */


/**
 * Pr채ziseier 
 *      en Umeldungs Link (umeldungsLink) [OPTIONAL]
 *      an en Info Link (infoLink) [OPTIONAL].
 * 
 */


/* Umeldungs Link an Info Link */
var umeldungLink = "https://forms.gle/NKqa9bmXAA2wGnfS7";
var infoLink = "https://drive.google.com/drive/folders/1xbHs4Y-F8-CgGzALI-lpBLu5NVKQC61Q?usp=drive_link";



/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_chessopen_info() {
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
}

/*----------------------------------------------------------------------------------------------------------------*/