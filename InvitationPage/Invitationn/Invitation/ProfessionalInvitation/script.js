function addNewTEField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("teField");
    newNode.setAttribute("row", 1);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let teOb = document.getElementById("te");
    let teAddButtonOb = document.getElementById("teAddButton");

    teOb.insertBefore(newNode, teAddButtonOb);

}

function addNewWEField() {
    // console.log("Adding new Field");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("row", 3);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder", "Enter here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);


}

function generateCV() {

    let nameField = document.getElementById("nameField").value;

    let nameT = document.getElementById("brideT");

    nameT.innerHTML = nameField;

    //////////////////////////////////////////////////////////////////////////////////////

     
    //////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("groomT").innerHTML = document.getElementById("groomField").value;

    //////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("dateT").innerHTML = document.getElementById("dateField").value;

    /////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("timeT").innerHTML = document.getElementById("timeField").value;

    //////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("brideT").innerHTML = document.getElementById("brideField").value;


    document.getElementById("venueT").innerHTML = document.getElementById("venueField").value;

    
    
    

    // document.getElementById("Form").style.display = "none"; ////////////////////////////////////
    // document.getElementById("doc2").style.display = "block";
    // ////////////////////////////////////////////////////////////////////////



}


function printCV() {

    window.print();

}