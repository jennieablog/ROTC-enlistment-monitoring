var input, filter, table, tbody, tr, td, i, j, raya_slots_taken, inf_slots_taken, rescue_slots_taken, band_slots_taken, hq_slots_taken;
filter = [61702,61706,61704,61710,61708]
table = document.getElementById("tbl_schedule");
tbody = table.getElementsByTagName("tbody");
for (i = 0; i < tbody.length; i++) {
    tr = tbody[i].getElementsByTagName("tr");
    td = tr[0].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
        if (td) {
            if (td[0].innerHTML == 61702) {
                raya_slots_taken = 50 - td[5].getElementsByTagName("strong")[0].innerHTML
                td[6].innerHTML = raya_slots_taken+" enlisted cadets"
                console.log("RAYADILLO:"+raya_slots_taken+" slots taken")
            }else if (td[0].innerHTML == 61706) {
                inf_slots_taken = 100 - td[5].getElementsByTagName("strong")[0].innerHTML
                td[6].innerHTML = inf_slots_taken+" enlisted cadets"
                console.log("INFANTRY:"+inf_slots_taken+" slots taken")
            }else if (td[0].innerHTML == 61704) {
                rescue_slots_taken = 100 - td[5].getElementsByTagName("strong")[0].innerHTML
                td[6].innerHTML = rescue_slots_taken+" enlisted cadets"
                console.log("RESCUE:"+rescue_slots_taken+" slots taken")
            }else if (td[0].innerHTML == 61710) {
                hq_slots_taken = 25 - td[5].getElementsByTagName("strong")[0].innerHTML
                td[6].innerHTML = hq_slots_taken+" enlisted cadets"
                console.log("HQ:"+hq_slots_taken+" slots taken")
            }else if (td[0].innerHTML == 61708) {
                band_slots_taken = 25 - td[5].getElementsByTagName("strong")[0].innerHTML
                td[6].innerHTML = band_slots_taken+" enlisted cadets"
                console.log("BAND:"+band_slots_taken+" slots taken")
            }else{
                tbody[i].style.display = "none";
            }
        }       
    }
}


