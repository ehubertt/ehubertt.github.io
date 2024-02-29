
class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title= title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");
        
        const h3=document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        const arrow=document.createElement("a");
        arrow.href = "#";
        arrow.innerHTML = "&#x2964;";
        arrow.classList.add("arrow");
        h3.append(arrow);
        arrow.onclick=this.expandContract;

        const columns = document.createElement("section");
        columns.classList.add("columns");
        section.append(columns);

        const imageSection = document.createElement("section");
        columns.append(imageSection);
        const image = document.createElement("img");
        image.src = "images/" + this.pic;
        imageSection.append(image);

        const moreSection = document.createElement("section");
        //moreSection.classList.add("hidden" , "more");
        moreSection.append(this.paragraph("Breed", this.breed));
        moreSection.append(this.paragraph("color", this.color));
        moreSection.append(this.paragraph("size", this.size));
        columns.append(moreSection);

        return section;
    }

    expandContract(e) {

        const section = e.currentTarget.closest(".dog").querySelector("more");

        if(section.classList.contains("hidden")) {
            e.cuurentTarget.innerHTML = "&#x2962;";
        } else {
            e.currentTarget.innerHTML = "&#x2964;";
        }

        section.classList.toggle("hidden");
    }

    paragraph(title, info) {
        const p = document.createElement("p");
        p.innerHTML= `<strong>${title}:</strong> ${info}`;

        return p;
    }
    
}



const dogs = [];
dogs.push(new Dog("Coco" , "Yorkie", "brown" , 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam" , "Golden Retriever", "Yellow" , 1, "medium", "golden-retriever.jpg"));


dogs.forEach((dog) => {
    document.getElementById("dog-list").append(dog.item);
})