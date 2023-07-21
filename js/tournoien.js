/* Tournoien */


/**
 * Präziseier 
 *      en Titel (newsTitle), 
 *      an News Texter (news) [OPTIONAL].
 * 
 */


/* Tournoien */
const tournoien = [
    /* Tournoi 1 */
    {
        "name":             "Tournoi 1",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "results_link":     "https://drive.google.com/drive/folders/1VqmC2PkiU_SPSs3dTENc_sReO0Ivoij1?usp=drive_link"  /* [OPTIONAL] */
    },

    /* Tournoi 2 */
    {
        "name":             "Tournoi 2",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "results_link":     ""  /* [OPTIONAL] */
    },

    /* Tournoi 3 */
    {
        "name":             "Tournoi 3",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "results_link":     ""  /* [OPTIONAL] */
    },

    /* Tournoi 4 */
    {
        "name":             "Tournoi 4",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "results_link":     ""  /* [OPTIONAL] */
    },

    /* Tournoi 5 */
    {
        "name":             "Tournoi 5",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "results_link":     ""  /* [OPTIONAL] */
    },

    /* Tournoi 6 */
    {
        "name":             "Tournoi 6",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "results_link":     ""  /* [OPTIONAL] */
    },

    /* Tournoi 7 */
    {
        "name":             "Tournoi 7",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "results_link":     ""  /* [OPTIONAL] */
    },

    /* Tournoi 8 */
    {
        "name":             "Tournoi 8",
        "start_date":       "",
        "end_date":         "", /* [OPTIONAL] */
        "umeldung_link":    "", /* [OPTIONAL] */
        "results_link":     ""  /* [OPTIONAL] */
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
                        <h1 class="mb-0">` + t["name"] + `</h1>
                    </div>
                    
                    <div class="d-flex flex-column flex-sm-row justify-content-sm-end mt-3">
                        <a class="btn btn-light me-sm-3`
            if (t["results_link"] === "") {
                tournoi_content += " disabled"
            }

            tournoi_content +=`" href="` + t["results_link"] + `" target="_blank">Méi Informatiounen</a>
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