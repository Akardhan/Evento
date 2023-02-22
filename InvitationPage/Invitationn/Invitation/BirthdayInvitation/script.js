function generateCV() {

    let nameField = document.getElementById("nameField").value;

    let nameT = document.getElementById("nameT");

    nameT.innerHTML = nameField;

    ///////////////////////////////////////////////////////////////////////////////

    document.getElementById("dateT").innerHTML = document.getElementById("dateField").value;

    document.getElementById("timeT").innerHTML = document.getElementById("timeField").value;

    //////////////////////////////////////////////////////////////////////////////

    document.getElementById("ageT").innerHTML = document.getElementById("ageField").value;

    //////////////////////////////////////////////////////////////////////////////

    
    //////////////////////////////////////////////////////////////////////////////

    document.getElementById("venueT").innerHTML = document.getElementById("venueField").value;
 
    

    ///////////////////////////////////////////////////////////////////////////////////

    
    document.getElementById("CV-form").style.display = "none"; 
    document.getElementById("temp").style.display = "block";
    
    function printCV() {

        window.print();
}
    
    






}