// Emma Hubert
const getCrafts = async() => {
    try {
        return (await fetch("https://portiaportia.github.io/json/crafts.json")).json();
    } catch (error) {
        console.log(error);
    }
};

const showCrafts = async () => {
    const crafts = await getCrafts();
    const craftList = document.getElementById("crafts-section");

    crafts.forEach(craft => {
        craftList.append(getCraftImage(craft));
    });
}

const getCraftImage = (craft) => {
    //create section for craft image
    const section = document.createElement("section");
    section.classList.add("craft-info");
    section.setAttribute("id", "craft-click");

    // Display main image
    const mainImage = document.createElement("img");
    mainImage.className = "images";
    mainImage.src = `images/${craft.image}`;
    section.appendChild(mainImage); //append to section

    mainImage.onclick = () => {
        displayCraftModal(craft);
    };

    return section;
}

const displayCraftModal = (craft) => {
    console.log("working");
    const dialog = document.getElementById("dialog");
    const dialogDetails = document.getElementById("dialog-details");

    // Clear previous content
    dialogDetails.innerHTML = '';

    // Add craft details to the modal
    const nameHeader = document.createElement("h2");
    nameHeader.textContent = craft.name;
    dialogDetails.appendChild(nameHeader);

    // Display description
    const description = document.createElement("p");
    description.className = "description";
    description.innerHTML = `<b>Description:</b> ${craft.description}`;
    dialogDetails.appendChild(description);

    // Display supplies
    const supplies = document.createElement("p");
    supplies.className = "suppliesList";
    supplies.innerHTML = `<b>Supplies:</b> ${craft.supplies.join(", ")}`;
    dialogDetails.appendChild(supplies);

    // Display main image in the modal
    const mainImage = document.createElement("img");
    mainImage.className = "modal-image";
    mainImage.src = `images/${craft.image}`;
    mainImage.alt = craft.name;
    dialogDetails.appendChild(mainImage);

    dialog.style.display = "block";
}

document.getElementById("close").onclick = () => {
    document.getElementById("dialog").style.display = "none";
};


window.onload = () => showCrafts();