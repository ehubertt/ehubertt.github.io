// Emma Hubert
// pictures screensoted from the assignment page on drop box 
// tree info/modal style/ and formatting help from w3schools and chat gpt 
class Tree {
    constructor(name, pic, type, growthRate, height, life, habitat, description) {
        this.name = name;
        this.pic = pic;
        this.type = type;
        this.growthRate = growthRate;
        this.height = height;
        this.life = life;
        this.habitat = habitat;
        this.description = description;
    }

    getSection() {
        const section = document.querySelector(".column");
        section.innerHTML = 
            `<h3>${this.name}</h3>
            <img class="images" src="images/${this.pic}" alt="${this.name}">`;
        return section;
    }

    getExpandedSection() {
        const section = document.createElement("section");
        section.innerHTML = 
            `<h3>${this.name}</h3>
            <p><b>Type:</b> ${this.type}</p>
            <p><b>Growth Rate:</b> ${this.growthRate}</p>
            <p><b>Height:</b> ${this.height}</p>
            <p><b>Life Span:</b> ${this.life}</p>
            <p><b>Habitat:</b> ${this.habitat}</p>
            <p> ${this.description}</p>`;

        const image = document.querySelector(".tree-image");
        image.innerHTML =  `<img class="images" src="images/${this.pic}" alt="${this.name}">`;
        return section;
    }

}

const trees = [
    new Tree("Bald Cypress", "bc.png", "Conifer", "1-2 feet per year", "120 ft", "600 years", "Swamps, Floodplains", "Bald Cypress is a large coniferous tree commonly found in swamps and floodplains. It is known for its unique buttressed trunk and knobby knees that protrude from the water. Bald Cypress can grow up to 120 feet tall and has a lifespan of around 600 years."),
    new Tree("Eastern Redbud", "er.png", "Deciduous", "Fast Growth", "20 ft", "60 years", "Forest understory", "Eastern Redbud is a small decidious tree. Trees typically grow 20 feet in height with a similar spread and have generally ascending branches and a rounded shape. Eastern redbud leaves are alternate, simple, broadly heart-shaped and 3-5 inches high and wide."),
    new Tree("Loblolly Pine", "lp.png", "Conifer", "Medium Growth", "100 ft", "500 years", "Coastal Plain", "Loblolly Pine is a large conifer native to the coastal plains. It is known for its rapid growth, reaching heights of up to 100 feet. Loblolly Pine has long, slender needles and produces oval-shaped cones. It is a common species used in forestry and timber production."),
    new Tree("Southern Magnolia", "sm.png", "Evergreen", "Slow to Medium Growth", "60 ft", "80-120 years", "Wetlands, Uplands", "Southern Magnolia is an evergreen tree commonly found in wetlands and uplands. It has a slow to medium growth rate and typically reaches heights of around 60 feet. Southern Magnolia is known for its large, glossy leaves and fragrant white flowers, which bloom in late spring to early summer.")
];


function addTreesToHome() {
    const sectionContent = document.getElementById("columns");
    trees.forEach(tree => {
        columns.appendChild(tree.getSection());
    });
}
addTreesToHome();

document.querySelectorAll(".columns section").forEach((section, index) => {
    section.onclick = (e) => {
        document.getElementById("dialog").style.display = "block";
        const selectedTree = trees[index];
        const dialogDetails = document.getElementById("dialog-details");
        dialogDetails.innerHTML = '';
        dialogDetails.appendChild(selectedTree.getExpandedSection());
    };
});

document.getElementById("dialog-close").onclick = () => {
    document.getElementById("dialog").style.display = "none";
};