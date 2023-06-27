/* News */


/**
 * Präziseier 
 *      en Titel (newsTitle), 
 *      en Link (newsLink) [OPTIONAL]
 *      an News Texter (news).
 * 
 * Wichteg!!
 * Zweschen all News Texter muss en Komma sinn!!!
 * 
 */


/* News Titel an Link (red button) */
var newsTitle = "Last Saturday Open!";
var newsLink = "lastsaturday.html";

/* News Elementer */
const news = [
    "20/05/2023 - 01/07/2023",
    "20/05/2023 - 01/07/2023",
    "20/05/2023 - 01/07/2023",
];







/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_news_bar() {
    if (newsTitle != "" && news.length != 0) {
        document.getElementById("news-title").innerHTML = newsTitle;
        $("#news-title").attr("href", newsLink);

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