const pets = [
    {
        imageurl: "images/1car.jpeg",
        name: "Brabus",
        type: "Rocket 1000",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/2car.jpeg",
        name: "Chevrolet",
        type: "Camaro",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/chill.jpeg",
        name: "Toyota",
        type: "Supra",
        status: "Stolen",
        telephone: 2340000000000
    },
    {
        imageurl: "images/3car.jpeg",
        name: "Chevrolet",
        type: "Corvette",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/5car.jpeg",
        name: "Dodge",
        type: "Challenger",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/bosscar.jpeg",
        name: "Dodge",
        animal: "Charger",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/4car.jpeg",
        name: "Ford",
        animal: "Mustang",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/chilis.jpeg",
        name: "Nissan",
        animal: "Gtr r-35",
        status: "Missing",
        telephone: 2340000000000
    },
    {
        imageurl: "images/ohyes_car.jpeg",
        name: "Porsche",
        animal: "GT",
        status: "Missing",
        telephone: 2340000000000
    },
    
];

function createPetCard(pets){
    document.querySelector(".grid-pets").innerHTML = "";
    pets.forEach(pet => {
        let card = document.createElement("article");
        let image = document.createElement("img");
        let name = document.createElement("h1");
        let type = document.createElement("p");
        let status = document.createElement("p");
        let contact = document.createElement("a");

        card.setAttribute("class","pet-card");
        image.setAttribute("src",pet.imageurl);
        image.setAttribute("alt",`${pet.name} ${pet.status} ${pet.type}`);
        image.setAttribute("loading","lazy");
        name.textContent = pet.name;
        type.textContent = `Type: ${pet.type}`;
        status.textContent = `Status: ${pet.status}`;
        contact.setAttribute("class","pet-contact-button");
        contact.setAttribute("href",`tel:${pet.telephone}`);
        contact.textContent = "Contact";

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(type);
        card.appendChild(status);
        card.appendChild(contact);

        document.querySelector(".grid-pets").appendChild(card);
    });
}

createPetCard(pets);