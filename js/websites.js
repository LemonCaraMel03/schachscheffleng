/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

const w_lst= [
    /*["1", "link"], 
    ["2", "link"]*/
]

function websites() {
    var content = ""

    if (w_lst.length != 0) {
        for (let w of w_lst) {
            content += `
                <a class="btn btn-danger fw-bold" target="_blank" href="`+ w[1] + `">
                    <i class="fa-solid fa-circle-right"></i>
                    `+ w[0] + `
                </a>
            `;
        }
    } else {
        content = "<p>To be added. <p>";
    }

    document.getElementById("websites").innerHTML = content;
}

/*----------------------------------------------------------------------------------------------------------------*/