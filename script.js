function Dark(){
    document.body.style.backgroundColor = "black";
    document.body.style.color= "white";
    document.getElementById("form").style.backgroundColor= "brown";



    document.getElementById("dark-btn").style.display="none";

    document.getElementById("light-btn").style.display="block";
}

function Light(){
    document.body.style.backgroundColor = "white";
    document.body.style.color= "black";
    document.getElementById("form").style.backgroundColor= "burlywood";


    document.getElementById("dark-btn").style.display="block";

    document.getElementById("light-btn").style.display="none";
}
