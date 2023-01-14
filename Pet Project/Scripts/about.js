function Salon(name,address,hours,phone){
    this.name = name;
    this.address = address;
    this.hours = hours;
    this.phone = phone;
}
let petSalon = new Salon("The Fashion Pet", "006400 1st Street #2 000000 ","9:00AM-5:00PM","234-456-7890")


function displaySalonInfo(){

    document.getElementById("salon-info").innerHTML=
        `
        <h2>Welcome to the ${petSalon.name} location on </h2>
        <p>${petSalon.address}</p>
        <h2> Store Hours </h2>
        <p>${petSalon.hours}</p>
        <h2> Phone Number </h2>
        <p>${petSalon.phone}</p>
        `;
}

function init(){
    displaySalonInfo();
};
window.onload = init;