const getHouses = async () => {
    const url = "https://ehubertt.github.io/examples/testJson/test.json";

    try{
        const response = await fetch(url);
        return response.json();
    }catch(error){
        console.log(error);
    }
}

const showHouses = async() => {
    const houses = await getHouses();
    const houseList = document.getElementById("houses");

    houses.forEach(house => {
        houseList.append(getHouseSection(house));
    })
}

const getHouseSection = (house) => {
    //create section for house content
    const section = document.createElement("section");
    section.className = "house-info";
    //add name of house at top
    const nameHeader = document.createElement("h2");
    nameHeader.textContent = house.name;
    section.appendChild(nameHeader);
    //create section for main image and description to flex
    const houseDiv = document.createElement("section");
    houseDiv.id = "house";

    // Display main image
    const mainImage = document.createElement("img");
    mainImage.className = "images";
    mainImage.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
    houseDiv.appendChild(mainImage); //append to section

    // Display house description
    const description = document.createElement("section");
    description.id = "description";
    description.innerHTML = `
        <p><b>Size:</b> ${house.size}</p>
        <p><b>Bedrooms:</b> ${house.bedrooms}</p>
        <p><b>Bathrooms:</b> ${house.bathrooms}</p>
        <p><b>Features:</b> ${house.features.join(", ")}</p>
    `;
    houseDiv.appendChild(description); //append to section

    section.appendChild(houseDiv); //append to main section

    // Display floor plans
    const floorPlansSection = document.createElement("section"); //create section for floor plan images to flex
    floorPlansSection.id = "columns";

    house.floor_plans.forEach(plan => {
        const planDiv = document.createElement("div");
        const planImage = document.createElement("img");
        const planName = document.createElement("p");
        planName.innerHTML = plan.name;
        planDiv.appendChild(planName);
        planImage.className = "floor-imgs";
        planImage.src = `https://portiaportia.github.io/json/images/house-plans/${plan.image}`;
        planDiv.appendChild(planImage);
        floorPlansSection.appendChild(planDiv); //append each div (containg name and image) to floor plan section
    });

    section.appendChild(floorPlansSection);
    

    return section;
}

window.onload = () => showHouses();