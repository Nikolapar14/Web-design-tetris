$(document).ready(function(){

    

    let rezultati = []
    let trenutniIgrac
    let igraci = localStorage.getItem("igraci")
    if(igraci)rezultati = JSON.parse(igraci)
    let trenutni= localStorage.getItem("trenutniIgrac")
    if(trenutni)trenutniIgrac = JSON.parse(trenutni)


    popuniTabelu()

    function popuniTabelu(){

        let br = 0

        for(let i =0; i< 5; i++){
            if(i == rezultati.length || i == 5)break;
            else{
                let red = $("<tr></tr>").css({"width":"1000px","height":"30px","background-color":"antiquewhite","border":"3px solid black"})
            
                let celija1 = $("<td></td>").html(rezultati[i].igrac)
                let celija2 = $("<td></td>").html(rezultati[i].brojPoena)
    
                red.append(celija1).append(celija2)
    
                $("#najboljiRezultati").append(red)
            }
        }

        $("#igr").html(trenutniIgrac.igrac)
        
        $("#skor").html(trenutniIgrac.brojPoena)

    

        

    }

    $("#povratak").click(function(){

        window.location.href = "tetris-uputstvo.html"

    })


})