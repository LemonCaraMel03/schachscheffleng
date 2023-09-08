/* Tournoien */


/**
 * Präziseier fir all Tournoi
 *      en Numm (name), 
 *      en Start Datum (start_date),
 *      en End Datum (end_date) [OPTIONAL],
 *      en Umeldungs Link (umeldung_link) [OPTIONAL]
 *      an en Link zum Information Dossier (info_link) [OPTIONAL].
 * 
 */


/* Tournoi Lescht */
const tournoien = [
    /* Tournoi 1 */
    {
        "name":             "Chess 960",
        "start_date":       "22.07.2023",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "info_link":     "https://drive.google.com/drive/folders/1Y8uemkfeEpAVzdyIFVJ_rxbWDt_ag6L6?usp=drive_link"  /* [OPTIONAL] */
    },

    /* Tournoi 2 */
    {
        "name":             "Offene Merziger Stadtmeisterschaften im Schnellschach",
        "start_date":       "13.08.2023",
        "end_date":         "13.08.2023", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "info_link":     "https://drive.google.com/drive/folders/1EDimE0Rex8kRrunc37xFaDPXdwhsfRek?usp=drive_link"  /* [OPTIONAL] */
    },

    /* Tournoi 3 */
    {
        "name":             "Tournoi 3",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "info_link":     ""  /* [OPTIONAL] */
    },

    /* Tournoi 4 */
    {
        "name":             "Tournoi 4",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "info_link":     ""  /* [OPTIONAL] */
    },

    /* Tournoi 5 */
    {
        "name":             "Tournoi 5",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "info_link":     ""  /* [OPTIONAL] */
    },

    /* Tournoi 6 */
    {
        "name":             "Tournoi 6",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "info_link":     ""  /* [OPTIONAL] */
    },

    /* Tournoi 7 */
    {
        "name":             "Tournoi 7",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "info_link":     ""  /* [OPTIONAL] */
    },

    /* Tournoi 8 */
    {
        "name":             "Tournoi 8",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "info_link":     ""  /* [OPTIONAL] */
    }

];






/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_tournoien() {
    const tournoi_list = tournoien.reverse();

    var tournoi_content = "";
    for (let t of tournoi_list) {

        if (t["name"] != "" && t["start_date"] != "") {
            tournoi_content += `
                <div class="highlight-box highlight-box-tight mb-4 d-flex flex-column flex-lg-row">

                    <div class="d-flex flex-column flex-sm-row me-auto">
                        <div class="d-flex flex-sm-column me-3">
                            <p class="mb-0">` + t["start_date"] + `</p>
            `
            
            if (t["end_date"] != "") {
                tournoi_content += `
                            <p class="mb-0 mx-2 align-self-center">-</p>
                            <p class="mb-0">` + t["end_date"] + `</p>
                `
            }

            tournoi_content += `
                        </div>

                        <div class="vr me-3 d-none d-sm-block"></div>
                        <h2 class="mb-0">` + t["name"] + `</h2>
                    </div>
                    
                    <div class="d-flex flex-column flex-sm-row justify-content-sm-end mt-3">
                        <a class="btn btn-light me-sm-3`
            if (t["info_link"] === "") {
                tournoi_content += " disabled"
            }

            tournoi_content +=`" href="` + t["info_link"] + `" target="_blank"  style="min-width: 165px;">Méi Informatiounen</a>
                        <a class="btn btn-danger me-sm-5`
                        
            if (t["umeldung_link"] === "") {
                tournoi_content += " disabled"
            }
            
            tournoi_content += `" href="` + t["umeldung_link"] + `" target="_blank">Umeldung</a>
                    </div>
                    
                </div>
            `
        }
        
    }

    document.getElementById("eis_tournoien").innerHTML = tournoi_content;
}

/*----------------------------------------------------------------------------------------------------------------*/