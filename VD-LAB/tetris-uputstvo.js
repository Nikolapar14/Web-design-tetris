$(document).ready(function(){

    let elementi = []

    $("#pokreni").click(function(){

       if(document.getElementById("lako").checked){
        localStorage.setItem("nivo","lako")
       }
       else if(document.getElementById("srednje").checked){
        localStorage.setItem("nivo","srednje")
       }
       else if(document.getElementById("tesko").checked){
        localStorage.setItem("nivo","tesko")
       }

       if(document.getElementById("cb1").checked){
        elementi.push(1)
       }
       if(document.getElementById("cb2").checked){
        elementi.push(2)
       }
       if(document.getElementById("cb3").checked){
        elementi.push(3)
       }
       if(document.getElementById("cb4").checked){
        elementi.push(4)
       }
       if(document.getElementById("cb5").checked){
        elementi.push(5)
       }
       if(document.getElementById("cb6").checked){
        elementi.push(6)
       }
       if(document.getElementById("cb7").checked){
        elementi.push(7)
       }

       localStorage.setItem("elementi",elementi)

        window.location.href = "tetris-igra.html"
    })


})