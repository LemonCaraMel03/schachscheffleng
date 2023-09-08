/* Last Saturday */


/**
 * Pr채ziseier 
 *      en Datum (datum), 
 *      en Umeldungs Link (umeldungsLink) [OPTIONAL]
 *      an en Info Link (infoLink) [OPTIONAL].
 * 
 */


/* !!! Last Saturday fir U8-U12 !!! */
var datum_U8_U12 = "16. September 2023" ; 
var umeldungLink_U8_U12 = "https://forms.gle/2n34kR8JGroqiqPj7";
var infoLink_U8_U12 = "https://drive.google.com/drive/folders/1fbMLSe0482KsTIdNREoM_8Np5HecT-_4?usp=sharing";



/* !!! Last Saturday fir U14-U20 !!! */
var datum_U14_U20 = "23. September 2023" ; 
var umeldungLink_U14_U20 = "https://forms.gle/CLvMsMVRFmnn43fR7";
var infoLink_U14_U20 = "https://drive.google.com/drive/folders/1vu8TWfiuT03s-cbPG-8Yn0hQGToQ5p1x?usp=sharing";




/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_lastsaturday_info() {
    if (datum_U8_U12 != "") {
        document.getElementById("datum_U8-U12").innerHTML = '<i class="fa-regular fa-calendar"></i>' + datum_U8_U12;

        if (umeldungLink_U8_U12 != "") {
            $("#umeldung_U8-U12").attr("href", umeldungLink_U8_U12);
        } else {
            document.getElementById("umeldung_U8-U12").classList.add("disabled")
        }

        if (infoLink_U8_U12 != "") {
            $("#info_U8-U12").attr("href", infoLink_U8_U12);
        } else {
            document.getElementById("info_U8-U12").classList.add("disabled")
        }
    } else {
        document.getElementById("datum_U8-U12").innerHTML = '<i class="fa-regular fa-calendar"></i> To be Announced';

        document.getElementById("umeldung_U8-U12").classList.add("disabled")
        document.getElementById("info_U8-U12").classList.add("disabled")
    }


    if (datum_U14_U20 != "") {
        document.getElementById("datum_U14-U20").innerHTML = '<i class="fa-regular fa-calendar"></i>' + datum_U14_U20;

        if (umeldungLink_U14_U20 != "") {
            $("#umeldung_U14-U20").attr("href", umeldungLink_U14_U20);
        } else {
            document.getElementById("umeldung_U14-U20").classList.add("disabled")
        }

        if (infoLink_U14_U20 != "") {
            $("#info_U14-U20").attr("href", infoLink_U14_U20);
        } else {
            document.getElementById("info_U14-U20").classList.add("disabled")
        }
    } else {
        document.getElementById("datum_U14-U20").innerHTML = '<i class="fa-regular fa-calendar"></i> To be Announced';

        document.getElementById("umeldung_U14-U20").classList.add("disabled")
        document.getElementById("info_U14-U20").classList.add("disabled")
    }
}

/*----------------------------------------------------------------------------------------------------------------*/