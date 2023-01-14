
let petSalon={
    name:"The Fashion Pet",
    address:{
        street:"1st",
        zip: "#####",
        number: 2
    },
    hours:{
        open:"9:00AM",
        close:"5:00PM"
    },
    pets:[]
}
let c=0;
//constuctor
function Pet(name,age,gender,breed,service,owner,phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = owner;
    this.contactPhone = phone;
    this.id=c++;

}


let inputName = document.getElementById("textName");
let inputAge = document.getElementById("textAge");
let inputGender = document.getElementById("textGender");
let inputBreed = document.getElementById("textBreed")
let inputService = document.getElementById("textService");
let inputOwnerName = document.getElementById("textOwner");
let inputContactPhone = document.getElementById("textPhone");

function validatePet(thePet){
    let validation=true;
    inputName.classList.remove("alert-error")
    inputAge.classList.remove("alert-error")
    inputBreed.classList.remove("alert-error")
    inputGender.classList.remove("alert-error")
    inputService.classList.remove("alert-error")
    inputOwnerName.classList.remove("alert-error")
    inputContactPhone.classList.remove("alert-error")
    if(thePet.name==""){
        inputName.classList.add("alert-error")
        validation=false;
    }
    if(thePet.age==""){
        inputAge.classList.add("alert-error")
        validation=false;
    }
    if(thePet.breed==""){
        inputBreed.classList.add("alert-error")
        validation=false;
    }
    if(thePet.gender==""){
        inputGender.classList.add("alert-error")
        validation=false;
    }
    if(thePet.service==""){
        inputService.classList.add("alert-error")
        validation=false;
    }
    if(thePet.ownerName==""){
        inputOwnerName.classList.add("alert-error")
        validation=false;
    }
    if(thePet.contactPhone==""){
        inputContactPhone.classList.add("alert-error")
        validation=false;
    }
    return validation;
}

function register(){

    //create a new object
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwnerName.value,inputContactPhone.value);
    if(validatePet(newPet)==true){
    //push it to the array
    petSalon.pets.push(newPet);
    displayInfo();
    displayPetCards();
    clearForm();
    }

}
function clearForm(){
inputName.value = "";
inputAge.value = "";
inputGender.value = "";
inputBreed.value = "";
inputService.value = "";
inputOwnerName.value = "";
inputContactPhone.value = "";
}
function deletePet(id){
    console.log("Deleting pet" + id)
    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(id==pet.id){    //find the pet
            deleteIndex=i;
        }
    }
    document.getElementById(id).remove();
        //delete the pet from the html
        //delete the pet from the array
        petSalon.pets.splice(deleteIndex,1);
        //.update info
        displayInfo();
}

// main function
function init(){
    let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","555-555-5555"); //creating the object

    let scrappy = new Pet("Scrappy",40,"Male","Mixed","Nail Trim","Shaggy","555-555-5555")
    
    let diablo = new Pet("Diablo",3,"male","Chiuwawa","Grooming","Mrs. Beverly","666-666-6666");
    
    petSalon.pets.push(scooby,scrappy,diablo);//adding the pet to the array
    displayInfo();
    displayPetCards();
    
};
window.onload = init;
//Pets
