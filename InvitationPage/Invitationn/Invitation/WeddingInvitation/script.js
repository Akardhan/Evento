function generateCV() {

    let nameField = document.getElementById("nameField").value;

    let nameT = document.getElementById("brideT");

    nameT.innerHTML = nameField;


    

  
    

    document.getElementById("groomT").innerHTML = document.getElementById("groomField").value;


    document.getElementById("dateT").innerHTML = document.getElementById("dateField").value;

    document.getElementById("timeT").innerHTML = document.getElementById("timeField").value;

    document.getElementById("venueT").innerHTML = document.getElementById("venueField").value;



    document.getElementById("CV-form").style.display = "none"; 
    document.getElementById("doc2").style.display = "block";
    


}


function printCV() {

    window.print();

}