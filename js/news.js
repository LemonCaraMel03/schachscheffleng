var newsTitle= "Last Saturday Open!";


const news = [
    "20/05/2023 - 01/07/2023",
    "20/05/2023 - 01/07/2023",
    "20/05/2023 - 01/07/2023"
];







/*-----------------------------------*/

function update_news_bar() {
    if (newsTitle != "" && news.length != 0) {
        document.getElementById("news-title").innerHTML = newsTitle;

        var newsContent = "";
        for (let e of news) {
            newsContent += "<li>" + e + "</li>";
        }
        document.getElementById("news").innerHTML = newsContent;

        document.getElementById("top-bar").style.marginTop= "44px";
    };
}
