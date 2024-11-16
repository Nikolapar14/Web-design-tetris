$(document).ready(function(){

    popuniTabelu();

    $("#sacuvaj").hide()

    let nivo = localStorage.getItem("nivo")
    
    let izabraniElementi = []

    if(localStorage.getItem("elementi")){
        let el = localStorage.getItem("elementi")
        let niz = el.split(",")
        niz.forEach(n =>{
            izabraniElementi.push(parseInt(n))
        })

        
        
        console.log(izabraniElementi[2])
    }
    

    let elementi = ["element_1","element_2","element_3","element_4","element_5","element_6","element_7"]
    let najboljiIgraci = []
   
    
    if(localStorage.getItem("igraci")){
        najIgr = localStorage.getItem("igraci")
        if(najIgr)najboljiIgraci = JSON.parse(najIgr)
        
    }else{
        najboljiIgraci = [{igrac: "Nikola", brojPoena: 700},{igrac: "Marko", brojPoena: 50},{igrac: "Stefan", brojPoena: 250},{igrac: "Luka", brojPoena: 130},{igrac: "Bora", brojPoena: 160}]
    }
    
    let element_u_igri = (izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)])
    let sledeciElement = (izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)])
    console.log(element_u_igri)

    let koordinateElementa = [[0,0],[0,0],[0,0],[0,0]]

    //let element_u_igri = 5

    let matricaStanja = kreirajMatricu(20,10);

    let matricaBoja = kreirajMatricu(20,10);

    let trenutniNivo = 0
    if(nivo == "lako"){
        trenutniNivo = 1
    }
    if(nivo == "srednje"){
        trenutniNivo = 3
    }
    if(nivo == "tesko"){
        trenutniNivo = 5
    }

    let pocetniNivo = trenutniNivo;

    $("#nivoTrenutni").html(trenutniNivo)

    
    let brojPoena = 0;

    $("#brPoena").html(brojPoena)

    let brojRotacija = 0

    let krajIgre = 0

    nova_runda();

    $("#cuvajRezultat").click(function(){

        let imeIgraca = document.getElementById("imeIgraca").value

        let igrac = {igrac: imeIgraca, brojPoena : brojPoena}

        najboljiIgraci.push(igrac)

        najboljiIgraci.sort((a,b)=>b.brojPoena - a.brojPoena)
        localStorage.setItem("igraci",JSON.stringify(najboljiIgraci))
        localStorage.setItem("trenutniIgrac",JSON.stringify(igrac))
        window.location.href = "tetris-rezultati.html"

    })

    function nova_runda(){

        prikaziSledeci();

        krajIgre = proveriKraj();
        if(krajIgre == 1){
            let t = confirm("Gotova igra! Pritisnite OK kako biste sačuvali rezultat!")
            if(t){

                


                $("#igra").hide()
                $("#poeninivo").hide()
                $("#sacuvaj").show()

                
            }
        }

        brojRotacija = 0

        switch(element_u_igri){
            case 1:
                matricaStanja[0][4] = 1;
                matricaStanja[1][4] = 1;
                matricaStanja[2][4] = 1;
                matricaStanja[3][4] = 1;
    
                koordinateElementa[0][0] = 0
                koordinateElementa[0][1] = 4
                koordinateElementa[1][0] = 1
                koordinateElementa[1][1] = 4
                koordinateElementa[2][0] = 2
                koordinateElementa[2][1] = 4
                koordinateElementa[3][0] = 3
                koordinateElementa[3][1] = 4
    
                iscrtajElement(1);
                
                break;
            
            case 2:
                matricaStanja[0][4] = 1;
                matricaStanja[1][4] = 1;
                matricaStanja[1][5] = 1;
                matricaStanja[2][5] = 1;

                koordinateElementa[0][0] = 0
                koordinateElementa[0][1] = 4
                koordinateElementa[1][0] = 1
                koordinateElementa[1][1] = 4
                koordinateElementa[2][0] = 1
                koordinateElementa[2][1] = 5
                koordinateElementa[3][0] = 2
                koordinateElementa[3][1] = 5
    
                iscrtajElement(2);
    
                break;
    
            case 3:
                matricaStanja[0][4] = 1;
                matricaStanja[0][5] = 1;
                matricaStanja[1][4] = 1;
                matricaStanja[2][4] = 1;

                koordinateElementa[0][0] = 0
                koordinateElementa[0][1] = 4
                koordinateElementa[1][0] = 0
                koordinateElementa[1][1] = 5
                koordinateElementa[2][0] = 1
                koordinateElementa[2][1] = 4
                koordinateElementa[3][0] = 2
                koordinateElementa[3][1] = 4

    
                iscrtajElement(3);
    
                break;
    
            case 4:
                matricaStanja[0][4] = 1;
                matricaStanja[1][4] = 1;
                matricaStanja[1][5] = 1;
                matricaStanja[2][4] = 1;

                koordinateElementa[0][0] = 0
                koordinateElementa[0][1] = 4
                koordinateElementa[1][0] = 1
                koordinateElementa[1][1] = 4
                koordinateElementa[2][0] = 1
                koordinateElementa[2][1] = 5
                koordinateElementa[3][0] = 2
                koordinateElementa[3][1] = 4
    
                iscrtajElement(4);
    
                break;
    
            case 5:
                matricaStanja[0][4] = 1;
                matricaStanja[1][4] = 1;
                matricaStanja[2][4] = 1;
                matricaStanja[2][5] = 1;

                koordinateElementa[0][0] = 0
                koordinateElementa[0][1] = 4
                koordinateElementa[1][0] = 1
                koordinateElementa[1][1] = 4
                koordinateElementa[2][0] = 2
                koordinateElementa[2][1] = 4
                koordinateElementa[3][0] = 2
                koordinateElementa[3][1] = 5
    
                iscrtajElement(5);
    
                break;
            
            case 6:
                matricaStanja[0][5] = 1;
                matricaStanja[1][5] = 1;
                matricaStanja[1][4] = 1;
                matricaStanja[2][4] = 1;

                koordinateElementa[0][0] = 0
                koordinateElementa[0][1] = 5
                koordinateElementa[1][0] = 1
                koordinateElementa[1][1] = 5
                koordinateElementa[2][0] = 1
                koordinateElementa[2][1] = 4
                koordinateElementa[3][0] = 2
                koordinateElementa[3][1] = 4
    
                iscrtajElement(6);
    
                break;  
                
            case 7:
                matricaStanja[0][4] = 1;
                matricaStanja[0][5] = 1;
                matricaStanja[1][4] = 1;
                matricaStanja[1][5] = 1;

                koordinateElementa[0][0] = 0
                koordinateElementa[0][1] = 4
                koordinateElementa[1][0] = 0
                koordinateElementa[1][1] = 5
                koordinateElementa[2][0] = 1
                koordinateElementa[2][1] = 4
                koordinateElementa[3][0] = 1
                koordinateElementa[3][1] = 5
    
                iscrtajElement(7);
    
                break; 
                
        }
    }


    function proveriKraj(){

        switch(element_u_igri){

            case 1:

                if(matricaStanja[0][4]==1 || matricaStanja[1][4] == 1 || matricaStanja[2][4]==1 || matricaStanja[3][4]==1){
                    return 1;
                    
                }else{
                    return 0
                }

                

            case 2:
                if(matricaStanja[0][4]==1 || matricaStanja[1][4] == 1 || matricaStanja[1][5]==1 || matricaStanja[2][5]==1){
                    return 1;
                    
                }else{
                    return 0
                }
                
            
            case 3:
                if(matricaStanja[0][4]==1 || matricaStanja[0][5] == 1 || matricaStanja[1][4]==1 || matricaStanja[2][4]==1){
                    return 1;
                    
                }else{
                    return 0
                }
                

            case 4:
                if(matricaStanja[0][4]==1 || matricaStanja[1][4] == 1 || matricaStanja[1][5]==1 || matricaStanja[2][4]==1){
                    return 1;
                    
                }else{
                    return 0
                }
                

            case 5:
                if(matricaStanja[0][4]==1 || matricaStanja[1][4] == 1 || matricaStanja[2][4]==1 || matricaStanja[2][5]==1){
                    return 1;
                    
                }else{
                    return 0
                }
                

            case 6:
                if(matricaStanja[0][5]==1 || matricaStanja[1][5] == 1 || matricaStanja[1][4]==1 || matricaStanja[2][4]==1){
                    return 1;
                    
                }else{
                    return 0
                }
                

            case 7:
                if(matricaStanja[0][4]==1 || matricaStanja[0][5] == 1 || matricaStanja[1][4]==1 || matricaStanja[1][5]==1){
                    return 1;
                    
                }else{
                    return 0
                }
                

        }



    }
    

    function iscrtajElement(brojElementa){

        switch(brojElementa){

            case 1:
                for(let i = 0; i<4; i++){
                    let klasa = koordinateElementa[i][0].toString() + koordinateElementa[i][1].toString()
                    let polje_klasa = "td." + klasa + " img.svetloplavi"

                            $(polje_klasa).show();
                }

                

                break;

            case 2:
                for(let i = 0; i<4; i++){
                    let klasa = koordinateElementa[i][0].toString() + koordinateElementa[i][1].toString()
                    let polje_klasa = "td." + klasa + " img.zeleni"

                            $(polje_klasa).show();
                }

                break;

            case 3:
                for(let i = 0; i<4; i++){
                    let klasa = koordinateElementa[i][0].toString() + koordinateElementa[i][1].toString()
                    let polje_klasa = "td." + klasa + " img.tamnoplavi"

                            $(polje_klasa).show();
                }

                break;

            case 4:
                for(let i = 0; i<4; i++){
                    let klasa = koordinateElementa[i][0].toString() + koordinateElementa[i][1].toString()
                    let polje_klasa = "td." + klasa + " img.ljubicasti"

                            $(polje_klasa).show();
                }

            
                break;

            case 5:

                for(let i = 0; i<4; i++){
                    let klasa = koordinateElementa[i][0].toString() + koordinateElementa[i][1].toString()
                    let polje_klasa = "td." + klasa + " img.narandzasti"

                            $(polje_klasa).show();
                }
                

            
                break;

            case 6:
                for(let i = 0; i<4; i++){
                    let klasa = koordinateElementa[i][0].toString() + koordinateElementa[i][1].toString()
                    let polje_klasa = "td." + klasa + " img.crveni"

                            $(polje_klasa).show();
                }

            
                break;

            case 7:
                for(let i = 0; i<4; i++){
                    let klasa = koordinateElementa[i][0].toString() + koordinateElementa[i][1].toString()
                    let polje_klasa = "td." + klasa + " img.zuti"

                            $(polje_klasa).show();
                }

            
                break;
            
        }

    }


    function proveriRed(){

        for(let c=0; c<20; c++){
            for(let i =19; i >=0; i--){
                for(let j = 0; j<10;j++){
                    if(matricaStanja[i][j]==0)break;
                    if(j == 9){
    
                        console.log("POPUNJEN RED")
                        brojPoena += (50 + 5*trenutniNivo)
                        
                        $("#brPoena").html(brojPoena)
                        if((pocetniNivo + Math.floor(brojPoena/150)) != trenutniNivo){
                            trenutniNivo = pocetniNivo + Math.floor(brojPoena/150)
                            
                            $("#nivoTrenutni").html(trenutniNivo)
                            clearInterval(interval)
                            interval = setInterval(startujIgru,400 - trenutniNivo*25)
                        }
                        

                        

                        
    
                        for(let k= 0; k<10;k++){
    
    
                            let klasa = i.toString() + k.toString()
                            let polje_klasa = "td." + klasa + " img"
    
                            $(polje_klasa).hide()
    
    
                        }
    
                        for(let x = i; x>0; x--){
    
                            for(let p =0; p<10; p++){
    
                                matricaStanja[x][p] = matricaStanja[x-1][p]
                                matricaBoja[x][p] = matricaBoja[x-1][p]
                                
    
                                switch(matricaBoja[x][p]){
    
                                    case 0:
                                        klasa = x.toString() + p.toString()
                                        polje_klasa = "td." + klasa + " img"
                                        $(polje_klasa).hide()
                                        break;
                                    
                                    case 1:
    
                                        klasa = x.toString() + p.toString()
                                        polje_klasa = "td." + klasa + " img"
                                        $(polje_klasa).hide()
                                        polje_klasa = "td." + klasa + " img.svetloplavi"
                                        $(polje_klasa).show()
                                        break;
    
                                    case 2:
    
                                        klasa = x.toString() + p.toString()
                                        polje_klasa = "td." + klasa + " img"
                                        $(polje_klasa).hide()
                                        polje_klasa = "td." + klasa + " img.zeleni"
                                        $(polje_klasa).show()
                                        break;
    
                                    case 3:
    
                                        klasa = x.toString() + p.toString()
                                        polje_klasa = "td." + klasa + " img"
                                        $(polje_klasa).hide()
                                        polje_klasa = "td." + klasa + " img.tamnoplavi"
                                        $(polje_klasa).show()
                                        break;
    
                                    case 4:
    
                                        klasa = x.toString() + p.toString()
                                        polje_klasa = "td." + klasa + " img"
                                        $(polje_klasa).hide()
                                        polje_klasa = "td." + klasa + " img.ljubicasti"
                                        $(polje_klasa).show()
                                        break;
    
                                    case 5:
    
                                        klasa = x.toString() + p.toString()
                                        polje_klasa = "td." + klasa + " img"
                                        $(polje_klasa).hide()
                                        polje_klasa = "td." + klasa + " img.narandzasti"
                                        $(polje_klasa).show()
                                        break;
    
                                    case 6:
    
                                        klasa = x.toString() + p.toString()
                                        polje_klasa = "td." + klasa + " img"
                                        $(polje_klasa).hide()
                                        polje_klasa = "td." + klasa + " img.crveni"
                                        $(polje_klasa).show()
                                        break;
    
                                    case 7:
    
                                        klasa = x.toString() + p.toString()
                                        polje_klasa = "td." + klasa + " img"
                                        $(polje_klasa).hide()
                                        polje_klasa = "td." + klasa + " img.zuti"
                                        $(polje_klasa).show()
                                        break;
                                    
                                    
    
                                }
    
                                
    
                            }
                                
                                
    
                        }
    
                        for(let x=0;x<10;x++){
                            matricaBoja[0][x] = 0
                            matricaStanja[0][x] = 0
    
                            klasa = "0" + x.toString()
                                        polje_klasa = "td." + klasa + " img"
                                        $(polje_klasa).hide()
                                        
    
    
                        }
    
                    }
                }
            }
        }


        
    }

    function rotacija(){

        switch(element_u_igri){

            case 1:

                if(brojRotacija == 0 ){
                    
                    if(koordinateElementa[0][1]<7 && matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1] + 1] != 1 && matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1] + 2] != 1 && matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1] + 3] != 1){

                        matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                    matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                    matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0

                    matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1] + 1] = 1
                    matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1] + 2] = 1
                    matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1] + 3] = 1

                    let klasa = koordinateElementa[1][0].toString() + koordinateElementa[1][1].toString();
                    let polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()

                    klasa = koordinateElementa[2][0].toString() + koordinateElementa[2][1].toString();
                    polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()

                    klasa = koordinateElementa[3][0].toString() + koordinateElementa[3][1].toString();
                    polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()

                    klasa = koordinateElementa[0][0].toString() + (koordinateElementa[0][1]+1).toString();
                    polje_klasa = "td." + klasa + " img.svetloplavi"
                    $(polje_klasa).show()

                    klasa = koordinateElementa[0][0].toString() + (koordinateElementa[0][1]+2).toString();
                    polje_klasa = "td." + klasa + " img.svetloplavi"
                    $(polje_klasa).show()

                    klasa = koordinateElementa[0][0].toString() + (koordinateElementa[0][1]+3).toString();
                    polje_klasa = "td." + klasa + " img.svetloplavi"
                    $(polje_klasa).show()

                    koordinateElementa[1][0] = koordinateElementa[0][0]
                    koordinateElementa[1][1] = koordinateElementa[0][1] + 1
                    koordinateElementa[2][0] = koordinateElementa[0][0]
                    koordinateElementa[2][1] = koordinateElementa[0][1] + 2
                    koordinateElementa[3][0] = koordinateElementa[0][0]
                    koordinateElementa[3][1] = koordinateElementa[0][1] + 3

                    }else{

                        break;

                    }
                    
                    



                }else{

                    if(koordinateElementa[0][0]<17 && matricaStanja[koordinateElementa[0][0]+1][koordinateElementa[0][1]] != 1 && matricaStanja[koordinateElementa[0][0]+2][koordinateElementa[0][1]] != 1 && matricaStanja[koordinateElementa[0][0]+3][koordinateElementa[0][1]] != 1){

                        matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                    matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                    matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0

                    matricaStanja[koordinateElementa[0][0] +1][koordinateElementa[0][1]] = 1
                    matricaStanja[koordinateElementa[0][0] +2][koordinateElementa[0][1]] = 1
                    matricaStanja[koordinateElementa[0][0] +3][koordinateElementa[0][1]] = 1

                    let klasa = koordinateElementa[1][0].toString() + koordinateElementa[1][1].toString();
                    let polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()

                    klasa = koordinateElementa[2][0].toString() + koordinateElementa[2][1].toString();
                    polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()

                    klasa = koordinateElementa[3][0].toString() + koordinateElementa[3][1].toString();
                    polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()

                    klasa = (koordinateElementa[0][0]+1).toString() + koordinateElementa[0][1].toString();
                    polje_klasa = "td." + klasa + " img.svetloplavi"
                    $(polje_klasa).show()

                    klasa = (koordinateElementa[0][0]+2).toString() + koordinateElementa[0][1].toString();
                    polje_klasa = "td." + klasa + " img.svetloplavi"
                    $(polje_klasa).show()

                    klasa = (koordinateElementa[0][0]+3).toString() + koordinateElementa[0][1].toString();
                    polje_klasa = "td." + klasa + " img.svetloplavi"
                    $(polje_klasa).show()

                    koordinateElementa[1][0] = koordinateElementa[0][0] + 1 
                    koordinateElementa[1][1] = koordinateElementa[0][1] 
                    koordinateElementa[2][0] = koordinateElementa[0][0] + 2
                    koordinateElementa[2][1] = koordinateElementa[0][1] 
                    koordinateElementa[3][0] = koordinateElementa[0][0] + 3
                    koordinateElementa[3][1] = koordinateElementa[0][1] 

                    }else{
                        break;
                    }

                    

                }

                brojRotacija = (brojRotacija + 1) % 2

                break;

            case 2:

                if(brojRotacija == 0){

                    if(koordinateElementa[2][1]<9 && matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] != 1 && matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1] + 1] != 1 ){

                        matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                    matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                    

                    matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] = 1
                    matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1] + 1] = 1
                    

                    let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString();
                    let polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()

                    klasa = koordinateElementa[1][0].toString() + koordinateElementa[1][1].toString();
                    polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()


                    klasa = (koordinateElementa[1][0]+1).toString() + (koordinateElementa[1][1]).toString();
                    polje_klasa = "td." + klasa + " img.zeleni"
                    $(polje_klasa).show()

                    klasa = koordinateElementa[2][0].toString() + (koordinateElementa[2][1]+1).toString();
                    polje_klasa = "td." + klasa + " img.zeleni"
                    $(polje_klasa).show()

                    

                    koordinateElementa[0][0] = koordinateElementa[1][0] + 1
                    koordinateElementa[1][0] = koordinateElementa[3][0]
                    koordinateElementa[1][1] = koordinateElementa[3][1]
                    koordinateElementa[3][0] = koordinateElementa[2][0]
                    koordinateElementa[3][1] = koordinateElementa[2][1] + 1

                    }else{

                        break;

                    }


                    

                }else{

                    if( matricaStanja[koordinateElementa[0][0]-1][koordinateElementa[0][1]] != 1 && matricaStanja[koordinateElementa[0][0]-2][koordinateElementa[0][1]] != 1 ){

                        matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                    matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                    

                    matricaStanja[koordinateElementa[0][0]-1][koordinateElementa[0][1]] = 1
                    matricaStanja[koordinateElementa[0][0]-2][koordinateElementa[0][1]] = 1
                    

                    let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString();
                    let polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()

                    klasa = koordinateElementa[3][0].toString() + koordinateElementa[3][1].toString();
                    polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()


                    klasa = (koordinateElementa[0][0]-1).toString() + (koordinateElementa[0][1]).toString();
                    polje_klasa = "td." + klasa + " img.zeleni"
                    $(polje_klasa).show()

                    klasa = (koordinateElementa[0][0]-2).toString() + koordinateElementa[0][1].toString();
                    polje_klasa = "td." + klasa + " img.zeleni"
                    $(polje_klasa).show()

                    

                    koordinateElementa[0][0] = koordinateElementa[0][0] -2
                    koordinateElementa[1][0] = koordinateElementa[2][0]
                    koordinateElementa[1][1] = koordinateElementa[2][1] -1
                    koordinateElementa[3][0] = koordinateElementa[2][0] + 1
                    koordinateElementa[3][1] = koordinateElementa[2][1]

                    }else{

                        break;

                    }


                }

                brojRotacija = (brojRotacija + 1) % 2
             
                break;

            case 3:

                if(brojRotacija == 0){

                if(koordinateElementa[2][1]>0 && matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] != 1){

                    matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                

                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] = 1
                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] = 1
                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1] - 1] = 1
                

                let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString();
                let polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()

                klasa = koordinateElementa[1][0].toString() + koordinateElementa[1][1].toString();
                polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()

                klasa = koordinateElementa[2][0].toString() + koordinateElementa[2][1].toString();
                polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()


                klasa = koordinateElementa[3][0].toString() + (koordinateElementa[3][1]-1).toString();
                polje_klasa = "td." + klasa + " img.tamnoplavi"
                $(polje_klasa).show()

                klasa = koordinateElementa[2][0].toString() + (koordinateElementa[2][1]-1).toString();
                polje_klasa = "td." + klasa + " img.tamnoplavi"
                $(polje_klasa).show()

                klasa = koordinateElementa[3][0].toString() + (koordinateElementa[3][1]+1).toString();
                polje_klasa = "td." + klasa + " img.tamnoplavi"
                $(polje_klasa).show()

                

                koordinateElementa[0][0] = koordinateElementa[3][0]
                koordinateElementa[0][1] = koordinateElementa[3][1] -1
                koordinateElementa[1][0] = koordinateElementa[2][0]
                koordinateElementa[1][1] = koordinateElementa[2][1] -1
                koordinateElementa[2][0] = koordinateElementa[3][0]

                koordinateElementa[3][1] = koordinateElementa[3][1] + 1


                }else{

                    break;

                }


                

            }else{

                if( matricaStanja[koordinateElementa[3][0]-2][koordinateElementa[3][1]] != 1 && matricaStanja[koordinateElementa[2][0]-2][koordinateElementa[2][1]] != 1 && matricaStanja[koordinateElementa[2][0]-1][koordinateElementa[2][1]] != 1){

                    matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                

                matricaStanja[koordinateElementa[2][0]-1][koordinateElementa[2][1]] = 1
                matricaStanja[koordinateElementa[2][0]-2][koordinateElementa[2][1]] = 1
                matricaStanja[koordinateElementa[3][0]-2][koordinateElementa[3][1]] = 1
                

                let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString();
                let polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()

                klasa = koordinateElementa[1][0].toString() + koordinateElementa[1][1].toString();
                polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()

                klasa = koordinateElementa[3][0].toString() + koordinateElementa[3][1].toString();
                polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()


                klasa = (koordinateElementa[2][0]-1).toString() + (koordinateElementa[2][1]).toString();
                polje_klasa = "td." + klasa + " img.tamnoplavi"
                $(polje_klasa).show()

                klasa = (koordinateElementa[2][0]-2).toString() + (koordinateElementa[2][1]).toString();
                polje_klasa = "td." + klasa + " img.tamnoplavi"
                $(polje_klasa).show()

                klasa = (koordinateElementa[3][0]-2).toString() + (koordinateElementa[3][1]).toString();
                polje_klasa = "td." + klasa + " img.tamnoplavi"
                $(polje_klasa).show()

                

                koordinateElementa[0][0] = koordinateElementa[2][0] -2
                koordinateElementa[0][1] = koordinateElementa[2][1]
                koordinateElementa[1][0] = koordinateElementa[3][0] -2
                koordinateElementa[1][1] = koordinateElementa[3][1]
                koordinateElementa[2][0] = koordinateElementa[2][0] -1

                koordinateElementa[3][1] = koordinateElementa[2][1]


                }else{

                    break;

                }

            }

            brojRotacija = (brojRotacija + 1) % 2
            break;

            case 4:

            if(brojRotacija == 0){

                if(koordinateElementa[2][1]>0 && matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] != 1 && matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] != 1 ){

                    matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                

                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] = 1
                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1] - 1] = 1
                

                let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString();
                let polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()

                klasa = koordinateElementa[1][0].toString() + koordinateElementa[1][1].toString();
                polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()


                klasa = (koordinateElementa[1][0]).toString() + (koordinateElementa[1][1]+1).toString();
                polje_klasa = "td." + klasa + " img.narandzasti"
                $(polje_klasa).show()

                klasa = koordinateElementa[2][0].toString() + (koordinateElementa[2][1]-1).toString();
                polje_klasa = "td." + klasa + " img.narandzasti"
                $(polje_klasa).show()

                

                koordinateElementa[0][0] = koordinateElementa[2][0]
                koordinateElementa[0][1] = koordinateElementa[2][1] -1
                koordinateElementa[1][0] = koordinateElementa[2][0]
                koordinateElementa[2][1] = koordinateElementa[3][1]
                koordinateElementa[3][0] = koordinateElementa[3][0] -1
                

                }else{

                    break;

                }

            }


            case 5 :

                if(brojRotacija == 0){

                    if(koordinateElementa[2][1]>0 && matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] != 1 && matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] != 1 ){

                        matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                    matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                    
    
                    matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] = 1
                    matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1] - 1] = 1
                    
    
                    let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString();
                    let polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()
    
                    klasa = koordinateElementa[1][0].toString() + koordinateElementa[1][1].toString();
                    polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()
    
    
                    klasa = (koordinateElementa[1][0]).toString() + (koordinateElementa[1][1]+1).toString();
                    polje_klasa = "td." + klasa + " img.narandzasti"
                    $(polje_klasa).show()
    
                    klasa = koordinateElementa[2][0].toString() + (koordinateElementa[2][1]-1).toString();
                    polje_klasa = "td." + klasa + " img.narandzasti"
                    $(polje_klasa).show()
    
                    
    
                    koordinateElementa[0][0] = koordinateElementa[2][0]
                    koordinateElementa[0][1] = koordinateElementa[2][1] -1
                    koordinateElementa[1][0] = koordinateElementa[2][0]
                    koordinateElementa[2][1] = koordinateElementa[3][1]
                    koordinateElementa[3][0] = koordinateElementa[3][0] -1
                    
    
                    }else{
    
                        break;
    
                    }

                }else{
                    if( matricaStanja[koordinateElementa[1][0]-1][koordinateElementa[1][1]] != 1 && matricaStanja[koordinateElementa[1][0]-2][koordinateElementa[1][1]] != 1 ){

                        matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                    matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                    
    
                    matricaStanja[koordinateElementa[1][0]-1][koordinateElementa[1][1]] = 1
                    matricaStanja[koordinateElementa[1][0]-2][koordinateElementa[1][1]] = 1
                    
    
                    let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString();
                    let polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()
    
                    klasa = koordinateElementa[3][0].toString() + koordinateElementa[3][1].toString();
                    polje_klasa = "td." + klasa + " img"
                    $(polje_klasa).hide()
    
    
                    klasa = (koordinateElementa[1][0]-1).toString() + (koordinateElementa[1][1]).toString();
                    polje_klasa = "td." + klasa + " img.narandzasti"
                    $(polje_klasa).show()
    
                    klasa = (koordinateElementa[1][0]-2).toString() + (koordinateElementa[1][1]).toString();
                    polje_klasa = "td." + klasa + " img.narandzasti"
                    $(polje_klasa).show()
    
                    
    
                    koordinateElementa[0][0] = koordinateElementa[1][0] -2
                    koordinateElementa[0][1] = koordinateElementa[1][1]
                    koordinateElementa[1][0] = koordinateElementa[1][0] -1
    
                    koordinateElementa[2][1] = koordinateElementa[1][1]
                    koordinateElementa[3][0] = koordinateElementa[3][0] +1
                }else{
                    break;
                }
            }
                brojRotacija = (brojRotacija + 1) % 2
                break;

            case 6:

            if(brojRotacija == 0){

                if(koordinateElementa[2][1]>0 && matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] != 1 && matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] != 1 ){

                    matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                

                matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] = 1
                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1] - 1] = 1
                

                let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString();
                let polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()

                klasa = koordinateElementa[1][0].toString() + koordinateElementa[1][1].toString();
                polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()


                klasa = (koordinateElementa[1][0]+1).toString() + (koordinateElementa[1][1]).toString();
                polje_klasa = "td." + klasa + " img.crveni"
                $(polje_klasa).show()

                klasa = koordinateElementa[2][0].toString() + (koordinateElementa[2][1]-1).toString();
                polje_klasa = "td." + klasa + " img.crveni"
                $(polje_klasa).show()

                

                koordinateElementa[0][0] = koordinateElementa[1][0] + 1
                koordinateElementa[1][0] = koordinateElementa[3][0]
                koordinateElementa[1][1] = koordinateElementa[3][1]
                koordinateElementa[3][0] = koordinateElementa[2][0]
                koordinateElementa[3][1] = koordinateElementa[2][1] - 1

                }else{

                    break;

                }


                

            }else{

                if( matricaStanja[koordinateElementa[0][0]-1][koordinateElementa[0][1]] != 1 && matricaStanja[koordinateElementa[0][0]-2][koordinateElementa[0][1]] != 1 ){

                    matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                

                matricaStanja[koordinateElementa[0][0]-1][koordinateElementa[0][1]] = 1
                matricaStanja[koordinateElementa[0][0]-2][koordinateElementa[0][1] ] = 1
                

                let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString();
                let polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()

                klasa = koordinateElementa[3][0].toString() + koordinateElementa[3][1].toString();
                polje_klasa = "td." + klasa + " img"
                $(polje_klasa).hide()


                klasa = (koordinateElementa[0][0]-1).toString() + (koordinateElementa[0][1]).toString();
                polje_klasa = "td." + klasa + " img.crveni"
                $(polje_klasa).show()

                klasa = (koordinateElementa[0][0]-2).toString() + (koordinateElementa[0][1]).toString();
                polje_klasa = "td." + klasa + " img.crveni"
                $(polje_klasa).show()

                

                koordinateElementa[0][0] = koordinateElementa[0][0] -2
                koordinateElementa[1][0] = koordinateElementa[2][0]
                koordinateElementa[1][1] = koordinateElementa[2][1] +1
                koordinateElementa[3][0] = koordinateElementa[2][0] + 1
                koordinateElementa[3][1] = koordinateElementa[2][1]

                }else{

                    break;

                }



            }

            brojRotacija = (brojRotacija + 1) % 2
                    break;

            
                

        }

    }

    function startujIgru(){

        if(krajIgre == 1){
            clearInterval(inter)
        }
        
        switch(element_u_igri){

            case 1:

                if(brojRotacija == 0){
                    if(koordinateElementa[0][0] < 16){
                        if(matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] != 1 ){
                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] = 1
        
                            let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
                            let polje_klasa = "td." + klasa + " img.svetloplavi"
        
                            $(polje_klasa).hide();
        
                            klasa = (koordinateElementa[3][0]+1).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.svetloplavi"
        
                            $(polje_klasa).show();
        
                            koordinateElementa[0][0]++;
                            koordinateElementa[1][0]++
                            koordinateElementa[2][0]++
                            koordinateElementa[3][0]++
        
                        }
                        else{
                            //clearInterval(inter)
                            matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 1
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 1
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 1
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 1

                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                            //element_u_igri = 7
                            proveriRed();
                            nova_runda()
                        }
                    }else{
                        //clearInterval(inter)

                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 1
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 1
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 1
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 1
                        
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        //element_u_igri = 7
                        proveriRed();
                        nova_runda()
                    }
                }else{

                    if(koordinateElementa[0][0] < 19){
                        if(matricaStanja[koordinateElementa[0][0]+1][koordinateElementa[0][1]] != 1 && matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] != 1 && matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]] != 1 && matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] != 1 ){
                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                            matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                            matricaStanja[koordinateElementa[0][0]+1][koordinateElementa[0][1]] = 1
                            matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] = 1
                            matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]] = 1
                            matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] = 1
        
                            let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
                            let polje_klasa = "td." + klasa + " img.svetloplavi"
        
                            $(polje_klasa).hide();

                             klasa = koordinateElementa[1][0].toString() + koordinateElementa[1][1].toString()
                             polje_klasa = "td." + klasa + " img.svetloplavi"
        
                            $(polje_klasa).hide();

                            klasa = koordinateElementa[2][0].toString() + koordinateElementa[2][1].toString()
                             polje_klasa = "td." + klasa + " img.svetloplavi"
        
                            $(polje_klasa).hide();

                            klasa = koordinateElementa[3][0].toString() + koordinateElementa[3][1].toString()
                             polje_klasa = "td." + klasa + " img.svetloplavi"
        
                            $(polje_klasa).hide();
        
                            klasa = (koordinateElementa[3][0]+1).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.svetloplavi"
        
                            $(polje_klasa).show();

                            klasa = (koordinateElementa[0][0]+1).toString() + koordinateElementa[0][1].toString()
                            polje_klasa = "td." + klasa + " img.svetloplavi"
        
                            $(polje_klasa).show();

                            klasa = (koordinateElementa[1][0]+1).toString() + koordinateElementa[1][1].toString()
                            polje_klasa = "td." + klasa + " img.svetloplavi"
        
                            $(polje_klasa).show();

                            klasa = (koordinateElementa[2][0]+1).toString() + koordinateElementa[2][1].toString()
                            polje_klasa = "td." + klasa + " img.svetloplavi"
        
                            $(polje_klasa).show();
        
                            koordinateElementa[0][0]++;
                            koordinateElementa[1][0]++
                            koordinateElementa[2][0]++
                            koordinateElementa[3][0]++
        
                        }
                        else{
                            //clearInterval(inter)
                            matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 1
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 1
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 1
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 1

                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                            proveriRed();
                            nova_runda()
                        }
                    }else{
                        //clearInterval(inter)

                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 1
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 1
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 1
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 1
                        
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        proveriRed();
                        nova_runda()
                    }

                }

                
                break;

            case 2:

            if(brojRotacija == 0){

                if(koordinateElementa[0][0] < 17){
                    if(matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] != 1 && matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] != 1){
                        
                        matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                        matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                        matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] = 1
                        matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] = 1

                        let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
                        let polje_klasa = "td." + klasa + " img.zeleni"
    
                        $(polje_klasa).hide();

                        klasa = (koordinateElementa[2][0]).toString() + koordinateElementa[2][1].toString()
                        polje_klasa = "td." + klasa + " img.zeleni"
    
                        $(polje_klasa).hide();

                        klasa = (koordinateElementa[1][0]+1).toString() + koordinateElementa[1][1].toString()
                        polje_klasa = "td." + klasa + " img.zeleni"
    
                        $(polje_klasa).show();
    
                        klasa = (koordinateElementa[3][0]+1).toString() + koordinateElementa[3][1].toString()
                        polje_klasa = "td." + klasa + " img.zeleni"
    
                        $(polje_klasa).show();

                        koordinateElementa[0][0]++;
                        koordinateElementa[1][0]++
                        koordinateElementa[2][0]++
                        koordinateElementa[3][0]++


                    }else{
                        //clearInterval(inter)
                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 2
                        matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 2
                        matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 2
                        matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 2

                        element_u_igri = sledeciElement
                        sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        proveriRed();
                        nova_runda()
                    }
                }else{
                    //clearInterval(inter)
                    matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 2
                        matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 2
                        matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 2
                        matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 2
                        element_u_igri = sledeciElement
                        sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                    proveriRed();
                    nova_runda()
                }

            }
            else if(brojRotacija == 1){

                if(koordinateElementa[2][0] < 18){
                    if(matricaStanja[koordinateElementa[0][0]+1][koordinateElementa[0][1]] != 1 && matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] != 1 && matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] != 1){
                        
                        matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                        matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                        matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                        matricaStanja[koordinateElementa[0][0]+1][koordinateElementa[0][1]] = 1
                        matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] = 1
                        matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] = 1

                        let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
                        let polje_klasa = "td." + klasa + " img.zeleni"
    
                        $(polje_klasa).hide();

                        klasa = (koordinateElementa[2][0]).toString() + koordinateElementa[2][1].toString()
                        polje_klasa = "td." + klasa + " img.zeleni"
    
                        $(polje_klasa).hide();

                        klasa = (koordinateElementa[3][0]).toString() + koordinateElementa[3][1].toString()
                        polje_klasa = "td." + klasa + " img.zeleni"
    
                        $(polje_klasa).hide();

                        klasa = (koordinateElementa[0][0]+1).toString() + koordinateElementa[0][1].toString()
                        polje_klasa = "td." + klasa + " img.zeleni"
    
                        $(polje_klasa).show();

                        klasa = (koordinateElementa[1][0]+1).toString() + koordinateElementa[1][1].toString()
                        polje_klasa = "td." + klasa + " img.zeleni"
    
                        $(polje_klasa).show();
    
                        klasa = (koordinateElementa[3][0]+1).toString() + koordinateElementa[3][1].toString()
                        polje_klasa = "td." + klasa + " img.zeleni"
    
                        $(polje_klasa).show();

                        koordinateElementa[0][0]++;
                        koordinateElementa[1][0]++
                        koordinateElementa[2][0]++
                        koordinateElementa[3][0]++


                    }else{
                        //clearInterval(inter)
                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 2
                        matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 2
                        matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 2
                        matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 2

                        element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        proveriRed();
                        nova_runda()
                    }
                }else{
                    //clearInterval(inter)
                    matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 2
                        matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 2
                        matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 2
                        matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 2
                        element_u_igri = sledeciElement
                        sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                    proveriRed();
                    nova_runda()
                }

            }

                
                break;

            case 3:

                if(brojRotacija == 0){

                    if(koordinateElementa[0][0] < 17){
                        if(matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] != 1 && matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]]!= 1){
                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                            matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] = 1
                            matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] = 1

                            let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
                            let polje_klasa = "td." + klasa + " img.tamnoplavi"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[1][0]).toString() + koordinateElementa[1][1].toString()
                            polje_klasa = "td." + klasa + " img.tamnoplavi"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[1][0]+1).toString() + koordinateElementa[1][1].toString()
                            polje_klasa = "td." + klasa + " img.tamnoplavi"
        
                            $(polje_klasa).show();
        
                            klasa = (koordinateElementa[3][0]+1).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.tamnoplavi"
        
                            $(polje_klasa).show();

                            koordinateElementa[0][0]++;
                            koordinateElementa[1][0]++
                            koordinateElementa[2][0]++
                            koordinateElementa[3][0]++
                        }else{
                            //clearInterval(inter)
                            matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 3
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 3
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 3
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 3
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                            proveriRed();
                            nova_runda()
                        }
                    }else{
                        //clearInterval(inter)
                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 3
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 3
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 3
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 3
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        proveriRed();
                        nova_runda()
                    }

                }else{

                    if(koordinateElementa[1][0] < 18){
                        if(matricaStanja[koordinateElementa[0][0]+1][koordinateElementa[0][1]] != 1 && matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]]!= 1 && matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]]!= 1){
                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                            matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                            matricaStanja[koordinateElementa[0][0]+1][koordinateElementa[0][1]] = 1
                            matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]] = 1
                            matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] = 1

                            let klasa = koordinateElementa[1][0].toString() + koordinateElementa[1][1].toString()
                            let polje_klasa = "td." + klasa + " img.tamnoplavi"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[2][0]).toString() + koordinateElementa[2][1].toString()
                            polje_klasa = "td." + klasa + " img.tamnoplavi"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[3][0]).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.tamnoplavi"
        
                            $(polje_klasa).hide();
        
                            klasa = (koordinateElementa[3][0]+1).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.tamnoplavi"
        
                            $(polje_klasa).show();

                            klasa = (koordinateElementa[2][0]+1).toString() + koordinateElementa[2][1].toString()
                            polje_klasa = "td." + klasa + " img.tamnoplavi"
        
                            $(polje_klasa).show();

                            klasa = (koordinateElementa[0][0]+1).toString() + koordinateElementa[0][1].toString()
                            polje_klasa = "td." + klasa + " img.tamnoplavi"
        
                            $(polje_klasa).show();

                            koordinateElementa[0][0]++;
                            koordinateElementa[1][0]++
                            koordinateElementa[2][0]++
                            koordinateElementa[3][0]++
                        }else{
                            //clearInterval(inter)
                            matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 3
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 3
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 3
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 3
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                            proveriRed();
                            nova_runda()
                        }
                    }else{
                        //clearInterval(inter)
                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 3
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 3
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 3
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 3
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        proveriRed();
                        nova_runda()
                    }

                }

                
                break;

            case 4:
                if(koordinateElementa[0][0]<17){
                    if(matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]] != 1 && matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]]!=1){

                        matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                        matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                        matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]] = 1
                        matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] = 1

                        let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
                        let polje_klasa = "td." + klasa + " img.ljubicasti"
    
                        $(polje_klasa).hide();

                        klasa = (koordinateElementa[2][0]).toString() + koordinateElementa[2][1].toString()
                        polje_klasa = "td." + klasa + " img.ljubicasti"
    
                        $(polje_klasa).hide();

                        klasa = (koordinateElementa[2][0]+1).toString() + koordinateElementa[2][1].toString()
                        polje_klasa = "td." + klasa + " img.ljubicasti"
    
                        $(polje_klasa).show();
    
                        klasa = (koordinateElementa[3][0]+1).toString() + koordinateElementa[3][1].toString()
                        polje_klasa = "td." + klasa + " img.ljubicasti"
    
                        $(polje_klasa).show();

                        koordinateElementa[0][0]++;
                        koordinateElementa[1][0]++
                        koordinateElementa[2][0]++
                        koordinateElementa[3][0]++

                    }else{
                        //clearInterval(inter)
                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 4
                        matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 4
                        matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 4
                        matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 4
                        element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        proveriRed();
                        nova_runda()
                    }
                }else{
                    //clearInterval(inter)
                    matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 4
                        matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 4
                        matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 4
                        matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 4
                        element_u_igri = sledeciElement
                        sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                    proveriRed();
                    nova_runda()
                }
                break;

            case 5:

                if(brojRotacija == 0){

                    if(koordinateElementa[0][0] < 17){
                        if(matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]] != 1 && matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] != 1){

                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                            matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]] = 1
                            matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] = 1

                            let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
                            let polje_klasa = "td." + klasa + " img.narandzasti"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[3][0]).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.narandzasti"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[2][0]+1).toString() + koordinateElementa[2][1].toString()
                            polje_klasa = "td." + klasa + " img.narandzasti"
        
                            $(polje_klasa).show();
        
                            klasa = (koordinateElementa[3][0]+1).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.narandzasti"
        
                            $(polje_klasa).show();

                            koordinateElementa[0][0]++;
                            koordinateElementa[1][0]++
                            koordinateElementa[2][0]++
                            koordinateElementa[3][0]++



                        }else{
                           // clearInterval(inter)
                           matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 5
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 5
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 5
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 5
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                            proveriRed();
                            nova_runda()
                        }
                    }else{
                        //clearInterval(inter)
                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 5
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 5
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 5
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 5
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        proveriRed();
                        nova_runda()
                    }

                }else{

                    if(koordinateElementa[3][0] < 18){
                        if(matricaStanja[koordinateElementa[0][0]+1][koordinateElementa[0][1]] != 1 && matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] != 1 && matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]] != 1){

                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                            matricaStanja[koordinateElementa[0][0]+1][koordinateElementa[0][1]] = 1
                            matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] = 1
                            matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]] = 1

                            let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
                            let polje_klasa = "td." + klasa + " img.narandzasti"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[1][0]).toString() + koordinateElementa[1][1].toString()
                            polje_klasa = "td." + klasa + " img.narandzasti"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[3][0]).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.narandzasti"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[0][0]+1).toString() + koordinateElementa[0][1].toString()
                            polje_klasa = "td." + klasa + " img.narandzasti"
        
                            $(polje_klasa).show();

                            klasa = (koordinateElementa[1][0]+1).toString() + koordinateElementa[1][1].toString()
                            polje_klasa = "td." + klasa + " img.narandzasti"
        
                            $(polje_klasa).show();
        
                            klasa = (koordinateElementa[2][0]+1).toString() + koordinateElementa[2][1].toString()
                            polje_klasa = "td." + klasa + " img.narandzasti"
        
                            $(polje_klasa).show();

                            koordinateElementa[0][0]++;
                            koordinateElementa[1][0]++
                            koordinateElementa[2][0]++
                            koordinateElementa[3][0]++



                        }else{
                           // clearInterval(inter)
                           matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 5
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 5
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 5
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 5
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                            proveriRed();
                            nova_runda()
                        }
                    }else{
                        //clearInterval(inter)
                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 5
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 5
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 5
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 5
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        proveriRed();
                        nova_runda()
                    }

                }

                

                break;

            case 6:
                if(brojRotacija == 0){
                    if(koordinateElementa[0][0] < 17){
                        if(matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] != 1 && matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] != 1){

                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                            matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] = 1
                            matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] = 1

                            let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
                            let polje_klasa = "td." + klasa + " img.crveni"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[2][0]).toString() + koordinateElementa[2][1].toString()
                            polje_klasa = "td." + klasa + " img.crveni"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[1][0]+1).toString() + koordinateElementa[1][1].toString()
                            polje_klasa = "td." + klasa + " img.crveni"
        
                            $(polje_klasa).show();
        
                            klasa = (koordinateElementa[3][0]+1).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.crveni"
        
                            $(polje_klasa).show();

                            koordinateElementa[0][0]++;
                            koordinateElementa[1][0]++
                            koordinateElementa[2][0]++
                            koordinateElementa[3][0]++



                        }else{
                            //clearInterval(inter)
                            matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 6
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 6
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 6
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 6
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                            proveriRed();
                            nova_runda()
                        }
                    }else{
                        //clearInterval(inter)
                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 6
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 6
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 6
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 6
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        proveriRed();
                        nova_runda()
                    }
                }else{

                    if(koordinateElementa[2][0] < 18){
                        if(matricaStanja[koordinateElementa[0][0]+1][koordinateElementa[0][1]] != 1 && matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] != 1 && matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] != 1){

                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                            matricaStanja[koordinateElementa[0][0]+1][koordinateElementa[0][1]] = 1
                            matricaStanja[koordinateElementa[1][0]+1][koordinateElementa[1][1]] = 1
                            matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] = 1

                            let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
                            let polje_klasa = "td." + klasa + " img.crveni"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[2][0]).toString() + koordinateElementa[2][1].toString()
                            polje_klasa = "td." + klasa + " img.crveni"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[3][0]).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.crveni"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[1][0]+1).toString() + koordinateElementa[1][1].toString()
                            polje_klasa = "td." + klasa + " img.crveni"
        
                            $(polje_klasa).show();
        
                            klasa = (koordinateElementa[3][0]+1).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.crveni"
        
                            $(polje_klasa).show();

                            klasa = (koordinateElementa[0][0]+1).toString() + koordinateElementa[0][1].toString()
                            polje_klasa = "td." + klasa + " img.crveni"
        
                            $(polje_klasa).show();


                            koordinateElementa[0][0]++;
                            koordinateElementa[1][0]++
                            koordinateElementa[2][0]++
                            koordinateElementa[3][0]++



                        }else{
                            //clearInterval(inter)
                            matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 6
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 6
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 6
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 6
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                            proveriRed();
                            nova_runda()
                        }
                    }else{
                        //clearInterval(inter)
                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 6
                            matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 6
                            matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 6
                            matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 6
                            element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        proveriRed();
                        nova_runda()
                    }

                }
                

                break;

                case 7:
                    if(koordinateElementa[0][0] < 18){
                        if(matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]] != 1 && matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] != 1){

                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                            matricaStanja[koordinateElementa[2][0]+1][koordinateElementa[2][1]] = 1
                            matricaStanja[koordinateElementa[3][0]+1][koordinateElementa[3][1]] = 1

                            let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
                            let polje_klasa = "td." + klasa + " img.zuti"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[1][0]).toString() + koordinateElementa[1][1].toString()
                            polje_klasa = "td." + klasa + " img.zuti"
        
                            $(polje_klasa).hide();

                            klasa = (koordinateElementa[2][0]+1).toString() + koordinateElementa[2][1].toString()
                            polje_klasa = "td." + klasa + " img.zuti"
        
                            $(polje_klasa).show();
        
                            klasa = (koordinateElementa[3][0]+1).toString() + koordinateElementa[3][1].toString()
                            polje_klasa = "td." + klasa + " img.zuti"
        
                            $(polje_klasa).show();

                            koordinateElementa[0][0]++;
                            koordinateElementa[1][0]++
                            koordinateElementa[2][0]++
                            koordinateElementa[3][0]++



                        }else{
                           // clearInterval(inter)
                           matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 7
                        matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 7
                        matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 7
                        matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 7
                        element_u_igri = sledeciElement
                        sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                            proveriRed();
                            nova_runda()
                        }
                    }else{
                        //clearInterval(inter)
                        matricaBoja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 7
                        matricaBoja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 7
                        matricaBoja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 7
                        matricaBoja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 7
                        element_u_igri = sledeciElement
                            sledeciElement = izabraniElementi[Math.floor(Math.random()*izabraniElementi.length)]
                        proveriRed();
                        nova_runda()
                    }

                    break;


                
                

        }
    }
    
    let interval;
    let barrier = false;

    $("#pokreni").click(function(){

        
        let inter = setInterval(startujIgru,400 - trenutniNivo*25)
        interval = inter;
        
         
    })

    $(document).keydown(function(event){
        if(event.keyCode == 40 && !barrier){
            barrier = true;
            clearInterval(interval)
            interval = setInterval(startujIgru,400 - trenutniNivo*25-35)
        }
        
    })

    $(document).keyup(function(event){
        if(event.keyCode == 40 && barrier){
            barrier = false;
            clearInterval(interval)
            interval = setInterval(startujIgru,400 - trenutniNivo*25)
        }
        
    })

    


    function kreirajMatricu(red, kol) {
        let matrica = [];
        for (let i = 0; i < red; i++) {
            let red = [];
            for (let j = 0; j < kol; j++) {
                red.push(0);
            }
            matrica.push(red);
        }
        return matrica;
    }

    

    function popuniTabelu(){

        for(let i =0; i < 20;i++){
            let red = $("<tr></tr>")
            for(let j = 0; j <10;j++){
                let klasa = i.toString() + j.toString();
                let celija = $("<td></td>").css({"width":"30px","height":"30px","background-color":"antiquewhite","border":"3px solid black"}).addClass(klasa).append(
                    $("<img>").attr("src","tetris-dodatno/ljubicasti_blok.png").css({"width":"100%","height":"100%"}).addClass("ljubicasti").hide()
                ).append(
                    $("<img>").attr("src","tetris-dodatno/crveni_blok.png").css({"width":"100%","height":"100%"}).addClass("crveni").hide()
                ).append(
                    $("<img>").attr("src","tetris-dodatno/narandzasti_blok.png").css({"width":"100%","height":"100%"}).addClass("narandzasti").hide()
                ).append(
                    $("<img>").attr("src","tetris-dodatno/svetloplavi_blok.png").css({"width":"100%","height":"100%"}).addClass("svetloplavi").hide()
                ).append(
                    $("<img>").attr("src","tetris-dodatno/tamnoplavi_blok.png").css({"width":"100%","height":"100%"}).addClass("tamnoplavi").hide()
                ).append(
                    $("<img>").attr("src","tetris-dodatno/zeleni_blok.png").css({"width":"100%","height":"100%"}).addClass("zeleni").hide()
                ).append(
                    $("<img>").attr("src","tetris-dodatno/zuti_blok.png").css({"width":"100%","height":"100%"}).addClass("zuti").hide()
                )
                red.append(celija)
            }
            $("#igra").append(red)
        }

        $("#sledeciElement").append(
            $("<img>").attr("src","tetris-dodatno/element_1.png").css({"width":"100px","height":"100px"}).addClass("svetloplavi1").hide()
        ).append(
            $("<img>").attr("src","tetris-dodatno/element_2.png").css({"width":"100px","height":"100px"}).addClass("zeleni1").hide()
        ).append(
            $("<img>").attr("src","tetris-dodatno/element_3.png").css({"width":"100px","height":"100px"}).addClass("tamnoplavi1").hide()
        ).append(
            $("<img>").attr("src","tetris-dodatno/element_4.png").css({"width":"100px","height":"100px"}).addClass("ljubicasti1").hide()
        ).append(
            $("<img>").attr("src","tetris-dodatno/element_5.png").css({"width":"100px","height":"100px"}).addClass("narandzasti1").hide()
        ).append(
            $("<img>").attr("src","tetris-dodatno/element_6.png").css({"width":"100px","height":"100px"}).addClass("crveni1").hide()
        ).append(
            $("<img>").attr("src","tetris-dodatno/element_7.png").css({"width":"100px","height":"100px"}).addClass("zuti1").hide()
        )

        

    }

    function prikaziSledeci(){
        switch(element_u_igri){
            case 1:
                $("img.svetloplavi1").hide()
                break;
            case 2:
                $("img.zeleni1").hide()
                break;
            case 3:
                $("img.tamnoplavi1").hide()
                break;
            case 4:
                $("img.ljubicasti1").hide()
                break;
            case 5:
                $("img.narandzasti1").hide()
                break;
            case 6:
                $("img.crveni1").hide()
                break;
            case 7:
                $("img.zuti1").hide()
                break;
        }

        switch(sledeciElement){
            case 1:
                $("img.svetloplavi1").show()
                break;
            case 2:
                $("img.zeleni1").show()
                break;
            case 3:
                $("img.tamnoplavi1").show()
                break;
            case 4:
                $("img.ljubicasti1").show()
                break;
            case 5:
                $("img.narandzasti1").show()
                break;
            case 6:
                $("img.crveni1").show()
                break;
            case 7:
                $("img.zuti1").show()
                break;
        }


    }

    function pomeriNaDesno(slika){

            let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
            let polje_klasa = "td." + klasa + " "+ slika
        
            $(polje_klasa).hide();

            klasa = (koordinateElementa[1][0]).toString() + koordinateElementa[1][1].toString()
            polje_klasa = "td." + klasa + " " + slika
        
            $(polje_klasa).hide();

            klasa = (koordinateElementa[2][0]).toString() + koordinateElementa[2][1].toString()
            polje_klasa = "td." + klasa + " " + slika
        
            $(polje_klasa).hide();
        
            klasa = (koordinateElementa[3][0]).toString() + koordinateElementa[3][1].toString()
            polje_klasa = "td." + klasa  + " " + slika
        
            $(polje_klasa).hide();

             klasa = koordinateElementa[0][0].toString() + (koordinateElementa[0][1]+1).toString()
             polje_klasa = "td." + klasa + " "+ slika
        
            $(polje_klasa).show();

            klasa = (koordinateElementa[1][0]).toString() + (koordinateElementa[1][1]+1).toString()
            polje_klasa = "td." + klasa + " " + slika
        
            $(polje_klasa).show();

            klasa = (koordinateElementa[2][0]).toString() + (koordinateElementa[2][1]+1).toString()
            polje_klasa = "td." + klasa + " " + slika
        
            $(polje_klasa).show();
        
            klasa = (koordinateElementa[3][0]).toString() + (koordinateElementa[3][1]+1).toString()
            polje_klasa = "td." + klasa  + " " + slika
        
            $(polje_klasa).show();

            koordinateElementa[0][1]++
            koordinateElementa[1][1]++
            koordinateElementa[2][1]++
            koordinateElementa[3][1]++

    }

    function pomeriNaLevo(slika){

        let klasa = koordinateElementa[0][0].toString() + koordinateElementa[0][1].toString()
        let polje_klasa = "td." + klasa + " "+ slika
    
        $(polje_klasa).hide();

        klasa = (koordinateElementa[1][0]).toString() + koordinateElementa[1][1].toString()
        polje_klasa = "td." + klasa + " " + slika
    
        $(polje_klasa).hide();

        klasa = (koordinateElementa[2][0]).toString() + koordinateElementa[2][1].toString()
        polje_klasa = "td." + klasa + " " + slika
    
        $(polje_klasa).hide();
    
        klasa = (koordinateElementa[3][0]).toString() + koordinateElementa[3][1].toString()
        polje_klasa = "td." + klasa  + " " + slika
    
        $(polje_klasa).hide();

         klasa = koordinateElementa[0][0].toString() + (koordinateElementa[0][1]-1).toString()
         polje_klasa = "td." + klasa + " "+ slika
    
        $(polje_klasa).show();

        klasa = (koordinateElementa[1][0]).toString() + (koordinateElementa[1][1]-1).toString()
        polje_klasa = "td." + klasa + " " + slika
    
        $(polje_klasa).show();

        klasa = (koordinateElementa[2][0]).toString() + (koordinateElementa[2][1]-1).toString()
        polje_klasa = "td." + klasa + " " + slika
    
        $(polje_klasa).show();
    
        klasa = (koordinateElementa[3][0]).toString() + (koordinateElementa[3][1]-1).toString()
        polje_klasa = "td." + klasa  + " " + slika
    
        $(polje_klasa).show();

        koordinateElementa[0][1]--
        koordinateElementa[1][1]--
        koordinateElementa[2][1]--
        koordinateElementa[3][1]--

}



    $(document).keydown(function(event){
        if(event.keyCode === 39){

            console.log("Right arrow key pressed");

            let slika = ""

            switch(element_u_igri){

                case 1:

                    if(brojRotacija == 0){
                        if(koordinateElementa[0][1]<9){

                            if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] != 1 &&matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] != 1&&matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]+1] != 1 &&matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] != 1){
                                
                                slika = "img.svetloplavi"
    
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] = 1
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] = 1
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]+1] = 1
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] = 1
    
                                pomeriNaDesno(slika);
    
                            }
                            
                            
    
                        }
                    }else{

                        if(koordinateElementa[3][1] < 9){

                            if(matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1] + 1] != 1){

                                slika = "img.svetloplavi"

                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] = 1
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] = 1
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]+1] = 1
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] = 1

                                pomeriNaDesno(slika);

                            }


                        }



                    }

                    

                    

                    break;
                
                case 2:

                    if(brojRotacija == 0){
                        
                        if(koordinateElementa[2][1]<9){

                            if(matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]+1] != 1 && matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] != 1){
        
                                slika = "img.zeleni"
        
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                                
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] = 1
                            
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]+1] = 1
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] = 1
        
                                pomeriNaDesno(slika);
        
                            }
        
                            
        
        
                        }
                        
                    }else if(brojRotacija == 1){

                        if(koordinateElementa[3][1]<9){

                            if(matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] != 1 && matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] != 1){
        
                                slika = "img.zeleni"
        
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                               
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] = 1
                            
                               
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] = 1
        
                                pomeriNaDesno(slika);
        
                            }
        
                            
        
        
                        }

                    }

                

                    
                    break;

                case 3:

                    if(brojRotacija == 0){

                        if(koordinateElementa[1][1]<9){

                            if(matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]+1] != 1 && matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] != 1){
                                slika = "img.tamnoplavi"
    
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                                
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] = 1
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]+1] = 1
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] = 1
    
                                pomeriNaDesno(slika);
    
    
                            }
                            
                            
    
                        }


                    }else{

                        if(koordinateElementa[3][1]<9){

                            if(matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] != 1 && matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] != 1){
                                slika = "img.tamnoplavi"
    
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                                
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] = 1
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] = 1
    
                                pomeriNaDesno(slika);
    
    
                            }
                            
                            
    
                        }

                    }

                    

                    
                    break;

                case 4:

                    if(koordinateElementa[2][1]<9){

                        if(matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]+1] != 1 && matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] != 1){
                            slika = "img.ljubicasti"

                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                            
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] = 1
                            
                            matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]+1] = 1
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] = 1

                            pomeriNaDesno(slika);


                        }
                            
                        

                    }
                    
                    break;

                case 5:
                    if(koordinateElementa[3][1]<9){

                        if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] != 1 && matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] != 1){
                            slika = "img.narandzasti"

                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                            matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                            
                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] = 1
                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] = 1
                            
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] = 1

                            pomeriNaDesno(slika);


                        }
                        
                        

                    }
                    
                    break;

                case 6:

                    if(brojRotacija == 0){

                        if(koordinateElementa[0][1]<9){

                            if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] != 1 && matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] != 1){
                                slika = "img.crveni"
    
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                                
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] = 1
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] = 1
                                
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] = 1
    
                                pomeriNaDesno(slika);
    
    
                            }
                            
                            
    
                        }

                    }else{

                        if(koordinateElementa[0][1]<9){

                            if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] != 1 && matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]+1] != 1){
                                slika = "img.crveni"
    
                                
                                
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]+1] = 1
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]+1] = 1
                                
                               
    
                                pomeriNaDesno(slika);
    
    
                            }
                            
                            
    
                        }

                    }

                    
                    
                    break;

                case 7:
                    if(koordinateElementa[1][1]<9){

                        if(matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] != 1)
                        
                        slika = "img.zuti"

                        matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                        
                        matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                        
                        
                        matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]+1] = 1
                        
                        matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]+1] = 1

                        pomeriNaDesno(slika);



                    }
                    
                    break;


            }


        }
    })


    $(document).keydown(function(event){
        if(event.keyCode === 37){

            console.log("Left arrow key pressed");

            let slika = ""

            switch(element_u_igri){

                case 1:

                    if(brojRotacija == 0){

                        if(koordinateElementa[0][1]>0){

                            if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] != 1 &&matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] != 1&&matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] != 1 &&matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] != 1){
                                
                                slika = "img.svetloplavi"
    
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] = 1
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] = 1
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] = 1
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] = 1
    
                                pomeriNaLevo(slika);
    
                            }
                            
                            
    
                        }

                    }else{
                        
                        if(koordinateElementa[0][1] > 0){

                            if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] != 1){

                                slika = "img.svetloplavi"

                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] = 1
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0

                                pomeriNaLevo(slika);

                            }

                        }

                    }

                    

                    

                    break;
                
                case 2:

                    if(brojRotacija == 0){

                        if(koordinateElementa[0][1]>0){

                            if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] != 1 && matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] != 1){
        
                                slika = "img.zeleni"
        
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                                
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] = 1
                            
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] = 1
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] = 1
        
                                pomeriNaLevo(slika);
        
                            }
        
                            
        
        
                        }

                    }else if(brojRotacija == 1){

                        if(koordinateElementa[0][1]>0){

                            if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] != 1 && matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] != 1){
        
                                slika = "img.zeleni"
        
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                
                                
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] = 1
                            
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] = 1
                                
        
                                pomeriNaLevo(slika);
        
                            }


                    }


                    }

                        
                

                    
                    break;

                case 3:

                    if(brojRotacija == 0){

                        if(koordinateElementa[0][1]>0){

                            if(matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] != 1 && matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] != 1){
                                slika = "img.tamnoplavi"
    
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                                
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] = 1
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] = 1
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] = 1
    
                                pomeriNaLevo(slika);
    
    
                            }
                            
                            
    
                        }

                    }else{

                        if(koordinateElementa[0][1]>0){

                            if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] != 1 && matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] != 1){
                                slika = "img.tamnoplavi"
    
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                                
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] = 1
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] = 1
                                
    
                                pomeriNaLevo(slika);
    
    
                            }
                            
                            
    
                        }

                    }

                    

                    
                    break;

                case 4:

                    if(koordinateElementa[0][1]>0){

                        if(matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] != 1 && matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] != 1){
                            slika = "img.ljubicasti"

                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                            
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] = 1
                            
                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] = 1
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] = 1

                            pomeriNaLevo(slika);


                        }
                            
                        

                    }
                    
                    break;

                case 5:
                    if(koordinateElementa[0][1]>0){

                        if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] != 1 && matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] != 1 && matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] != 1){
                            slika = "img.narandzasti"

                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                            
                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] = 1
                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] = 1
                            
                            matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] = 1

                            pomeriNaLevo(slika);


                        }
                        
                        

                    }
                    
                    break;

                case 6:
                    
                    if(brojRotacija == 0){

                        if(koordinateElementa[2][1]>0){

                            if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] != 1 && matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] != 1){
                                slika = "img.crveni"
    
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                                
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] = 1
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] = 1
                                
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] = 1
    
                                pomeriNaLevo(slika);
    
    
                            }
                            
                            
    
                        }

                    }else{

                        if(koordinateElementa[3][1]>0){

                            if(matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] != 1 && matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] != 1){
                                slika = "img.crveni"
    
                                matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]] = 0
                                
                                matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]] = 0
                                
                                matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]-1] = 1
                                
                                
                                matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]-1] = 1
    
                                pomeriNaLevo(slika);
    
    
                            }
                            
                            
    
                        }

                    }


                    
                    
                    break;

                case 7:
                    if(koordinateElementa[0][1]>0){

                        if(matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] != 1 && matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] != 1){
                            
                            
                            slika = "img.zuti"

                            matricaStanja[koordinateElementa[1][0]][koordinateElementa[1][1]] = 0
                            
                            matricaStanja[koordinateElementa[3][0]][koordinateElementa[3][1]] = 0
                            
                            
                            matricaStanja[koordinateElementa[0][0]][koordinateElementa[0][1]-1] = 1
                            
                            matricaStanja[koordinateElementa[2][0]][koordinateElementa[2][1]-1] = 1

                            pomeriNaLevo(slika);
                        }
                        
                        
                    }
                    
                    break;


            }


        }
    })

    $(document).keydown(function(event){
        if(event.keyCode === 38){

            console.log("Rotation success!")
            rotacija();

        }
    })

    

    

})