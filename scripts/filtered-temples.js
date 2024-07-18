const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    
    {
        templeName: "Salt Lake",
        location: "Salt Lake, Utah, United States",
        dedicated: "1983, April, 24",
        area: 382207,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 14",
        area: 190614,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 22",
        area: 156558,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
        templeName: "Jordan River Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "1981, November, 20",
        area: 148236,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-40086-main.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 8",
        area: 143969,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40892-main.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 19",
        area: 119619,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
    },
    {
        templeName: "Colonia Juárez Chihuahua Mexico",
        location: "Colonia Juárez, Chihuahua, Mexico",
        dedicated: "1999, March, 7",
        area: 6800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-1601-main.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Rte 1, Yigo  96929,Guam",
        dedicated: "2022, May, 22",
        area: 6861,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
        templeName: "San Juan Puerto Rico",
        location: "San Juan, PR  00926",
        dedicated: "2023, January, 15",
        area: 6988,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-juan-puerto-rico-temple/san-juan-puerto-rico-temple-48152-main.jpg"
    },
    {
        templeName: "Praia Cape Verde",
        location: "Praia, Santiago, Cape Verde",
        dedicated: "2022, June, 15",
        area: 8759,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/praia-cape-verde-temple/praia-cape-verde-temple-27204-main.jpg"
    },
    {
        templeName: "Cobán Guatemala",
        location: "Barrio Bella Vista, Cobán, Alta Verapaz, Guatemala",
        dedicated: "2024, June, 9",
        area: 8800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg"
    },
    {
        templeName: "San Luis Potosí Mexico",
        location: "San Luis Potosí, San Luis Potosí",
        dedicated: "2024, March, 9",
        area: 9300,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-luis-potosi-mexico-temple/san-luis-potosi-mexico-temple-44841-main.jpg"
    },
    {
        templeName: "Port Moresby Papua New Guinea",
        location: "Badili, Port Moresby, Papua New Guinea",
        dedicated: "2023, April, 22",
        area: 9550,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/port-moresby-papua-new-guinea-temple/port-moresby-papua-new-guinea-temple-11739-main.jpg"
    }
];

function createTempleCard(filteredTemples){
    document.querySelector(".grid-temples").innerHTML = "";
    filteredTemples.forEach(temple =>{
        let card = document.createElement("article");
        let name = document.createElement("h1");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        card.setAttribute("class","temple-card");
        name.textContent = temple.templeName;
        location.innerHTML = `<p><span class="label">Location:</span> ${temple.location}</p>`;
        dedication.innerHTML = `<p><span class="label">Dedicated:</span> ${temple.dedicated}</p>`;
        area.innerHTML = `<p><span class="label">Size:</span> ${temple.area} sq ft</p>`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        
        document.querySelector(".grid-temples").appendChild(card);
    });
}

createTempleCard(temples);

const homeFilterLink = document.querySelector("#homeFilter");
const oldFilterLink = document.querySelector("#oldFilter");
const newFilterLink = document.querySelector("#newFilter");
const largeFilterLink = document.querySelector("#largeFilter");
const smallFilterLink = document.querySelector("#smallFilter");

homeFilterLink.addEventListener("click", () => {
    createTempleCard(temples);
})

oldFilterLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        let year = parseInt(temple.dedicated.split(", ")[0]); //Split the text to keep only the year
        return year < 1900; // Filter based on the target year and math expression you prefer
    }));
})

newFilterLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        let year = parseInt(temple.dedicated.split(", ")[0]); //Split the text to keep only the year
        return year > 2000; // Filter based on the target year and math expression you prefer
    }));
})

largeFilterLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area.valueOf() > 90000));
})

smallFilterLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area.valueOf() < 10000));
})
