/* News */


/**
 * Pr채ziseier 
 *      en Titel (newsTitle), 
 *      an News Texter (news) [OPTIONAL].
 * 
 */


/* News Titel (red button) */
var newsTitle = "Sign up for our Chess Open 23/24";
var newsLink = "chessopen.html";


/* News Texter [OPTIONAL] */
const news = [
    /*News Text 1: */   "Found a bug? - Contact us at contact@schachscheffleng.lu",
    /*News Text 2: */   "New tournaments : Last Saturday U8/U12 : 16/09/2023",
    /*News Text 3: */   "Last Saturday U14/U20 : 23/09/2023",
    /*News Text 4: */   "Chess Open 2023/24 : 30/09/2023"
];







/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_news_bar() {
    if (newsTitle != "" && news.length != 0) {
        document.getElementById("news-title").innerHTML = newsTitle;
        document.getElementById("news-title").setAttribute("href", newsLink);

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