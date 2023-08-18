/* Championnat */


/* Championnat Links */
var round_1= "https://drive.google.com/drive/folders/18XDOaTvhTrxZIcTt3pIgu4hiEdVtVIWx?usp=drive_link";
var round_2= "https://drive.google.com/drive/folders/1nDzj8bmAuqMM_ipdlshJaehDmqsnUUU-?usp=sharing";
var round_3= "https://drive.google.com/drive/folders/1QVWnGWB_fYYBGULmH6NGby_N5VBeebi_?usp=sharing";
var round_4= "https://drive.google.com/drive/folders/1mvWo2X35H4Asp348uxk2vOLr41ihCiT7?usp=sharing";
var round_5= "https://drive.google.com/drive/folders/1RaNZC8srpcM5_tj4o7cDKlrogZbT4H92?usp=sharing";
var round_6= "https://drive.google.com/drive/folders/1dUgfyMUBHh3zrdffHkv8UY-UcisNGdGi?usp=sharing";
var round_7= "https://drive.google.com/drive/folders/1eKCaU1Cj6w7QavlRmFEckL4n4VWTcrbn?usp=sharing";
var round_8= "https://drive.google.com/drive/folders/16I3-_fHJVYWGHqNx2dKHQFarNwEW8nuX?usp=sharing";
var round_9= "https://drive.google.com/drive/folders/18ZrtLeKSwwkdRR7UA2O3QrFLJFi0lxIH?usp=sharing";
var round_10= "https://drive.google.com/drive/folders/1qg2ctmbhdUm6dsuLQGNfjNRvlWdCMAI9?usp=sharing";


/* CODE - Net upacken weg. !! */
/*----------------------------------------------------------------------------------------------------------------*/

function update_championnat_info() {

    if (round_1 != "") {
        $("#championnat-1").attr("href", round_1);
    } else {
        document.getElementById("championnat-1").classList.add("disabled")
    }
    /*####################*/

    if (round_2 != "") {
        $("#championnat-2").attr("href", round_2);
    } else {
        document.getElementById("championnat-2").classList.add("disabled")
    }
    /*####################*/

    if (round_3 != "") {
        $("#championnat-3").attr("href", round_3);
    } else {
        document.getElementById("championnat-3").classList.add("disabled")
    }
    /*####################*/

    if (round_4 != "") {
        $("#championnat-4").attr("href", round_4);
    } else {
        document.getElementById("championnat-4").classList.add("disabled")
    }
    /*####################*/

    if (round_5 != "") {
        $("#championnat-5").attr("href", round_5);
    } else {
        document.getElementById("championnat-5").classList.add("disabled")
    }
    /*####################*/

    if (round_6 != "") {
        $("#championnat-6").attr("href", round_6);
    } else {
        document.getElementById("championnat-6").classList.add("disabled")
    }
    /*####################*/

    if (round_7 != "") {
        $("#championnat-7").attr("href", round_7);
    } else {
        document.getElementById("championnat-7").classList.add("disabled")
    }
    /*####################*/

    if (round_8 != "") {
        $("#championnat-8").attr("href", round_8);
    } else {
        document.getElementById("championnat-8").classList.add("disabled")
    }
    /*####################*/

    if (round_9 != "") {
        $("#championnat-9").attr("href", round_9);
    } else {
        document.getElementById("championnat-9").classList.add("disabled")
    }
    /*####################*/

    if (round_10 != "") {
        $("#championnat-10").attr("href", round_10);
    } else {
        document.getElementById("championnat-10").classList.add("disabled")
    }

}

/*----------------------------------------------------------------------------------------------------------------*/