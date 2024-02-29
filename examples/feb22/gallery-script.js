

document.querySelectorAll(".items section").forEach((section)=> {
    section.onclick = (e) => {
        document.getElementById("dialog").style.display = "block";

       // console.log(e.target); // what thing did i click to bring up that dialog 
        //console.log(e.currentTarget); // will give you the section (what the event is tied to)

       document.querySelector("#dialog-content img").src = e.currentTarget.querySelector("img").src; 

        //const src= e.currentTarget.querySelector("img").src;
        //console.log(src);

        const detailSection = document.getElementById("dialog-details");
        detailSection.innerHTML = "";
        const h3 = document.createElement("h3");
        h3.innerHTML = section.querySelector("h3").innerHTML;
        detailSection.append(h3);

        const ps = section.querySelectorAll("p"); // gets all paragraphs in section
        ps.forEach((p) => {
            const newP = document.createElement("p");
            newP.innerHTML = p.innerHTML;
            detailSection.append(newP);
        })

        const p = document.createElement("p");
        p.innerHTML = section.querySelector("p").innerHTML;
        detailSection.append(p);
        


    };
});

document.getElementById("dialog-close").onclick = () => {
    document.getElementById("dialog").style.display = "none";
}