/* Championnat Teams */

var team_1 = "TEAM 1 - Nationaldivisioun";
var team_2 = "TEAM 2 - Eirepromotioun";
var team_3 = "TEAM 3 - 1. Divisioun";
var team_4 = "TEAM 4 - 2. Divisioun";
var team_5 = "(No Team) 3. Divisioun";
var team_6 = "TEAM 5 - 4. Divisioun (Poule 3)";
var team_7 = "TEAM 6 - 4. Division (Poule 1)";
var team_8 = "TEAM 7 - Divisioun (Poule 2)";



/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_championnat_teams() {
    if (team_1 != "") {
        document.getElementById("team-1").innerHTML = team_1;
    } 
    if (team_2 != "") {
        document.getElementById("team-2").innerHTML = team_2;
    } 
    if (team_3 != "") {
        document.getElementById("team-3").innerHTML = team_3;
    } 
    if (team_4 != "") {
        document.getElementById("team-4").innerHTML = team_4;
    } 
    if (team_5 != "") {
        document.getElementById("team-5").innerHTML = team_5;
    } 
    if (team_6 != "") {
        document.getElementById("team-6").innerHTML = team_6;
    } 
    if (team_7 != "") {
        document.getElementById("team-7").innerHTML = team_7;
    } 
    if (team_8 != "") {
        document.getElementById("team-8").innerHTML = team_8;
    } 
}

/*----------------------------------------------------------------------------------------------------------------*/