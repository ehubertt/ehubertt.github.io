// Emma Hubert




const colorSquare = () => {
    console.log("yay made it!");
    document.getElementById("square").classList.add("rainbow");
}


const moveDown = () => {
    pos +=10;
    const root= document.querySelector(":root");
    //document.querySelector("#square")
    root.style.setProperty("--square-top", "200px");

}

const addCircle = () => {
    console.log("circles");

    //get text from user input 
    const color = document.getElementById("txt-color").value;
    const root= document.querySelector(":root");
    //changes color of all balls 
    //root.style.setProperty("--ball-color", color); 

    const playground = document.getElementById("circle-playground");
    //playground.innerHTML +="test";

   // one way to add circles 
   playground.innerHTML += "<section class='circle'></section>";

    //different way to add circles 
    const ball = document.createElement ("section");
    ball.classList.add("circle");
    playground.append(ball);
    ball.style.background=color; // chnages color of one ball

}

document.getElementById("btn-color").onclick = colorSquare;
document.getElementById("btn-move-down").onclick = moveDown;
document.getElementById("btn-add-circle").onclick=addCircle;


