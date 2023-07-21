/* News */


/**
 * Präziseier 
 *      en Titel (newsTitle), 
 *      an News Texter (news) [OPTIONAL].
 * 
 */


/* News Titel (red button) */
var newsTitle = "Website in Testing";


/* News Texter [OPTIONAL] */
const news = [
    /*News Text 1: */   "Found a bug?",
    /*News Text 2: */   "Contact us at contact@schachscheffleng.com.",
    /*News Text 3: */   "",
    /*News Text 4: */   ""
];







/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_news_bar() {
    if (newsTitle != "" && news.length != 0) {
        document.getElementById("news-title").innerHTML = newsTitle;

        var newsContent = "";
        for (let e of news) {
            newsContent += "<li>" + e + "</li>";
        }
        document.getElementById("news").innerHTML = newsContent;

        document.getElementById("news-bar").style.display = "block";
        document.getElementById("top-bar").style.marginTop = "44px";
    };
}

/*----------------------------------------------------------------------------------------------------------------*/