// Emma HUbert


const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}



document.getElementById("hamburger").onclick = showHideNav;

const changeP =(e) => {
    e.preventDefault(); // dont go to another page after clicking 
    document.getElementById("display").textContent="hello emma";

}

document.getElementById("link-click").onclick = changeP;

const showMood =() => {
    const color = document.getElementById("txt-mood").value.toLowerCase().trim();
    const moodP = document.getElementById("mood");
    let mood = "undeterminable";

    if (color == "red") {
        mood = "ANGRY";
    } else if (color == "blue") {
        mood = "sad";
    } else if (color == "yellow") {
        mood = "yellow";
    }

    moodP.innerHTML = `You are in a ${mood}`;
}

document.getElementById("txt-mood").onkeyup = showMood;

const evaluateForm = (e) => {  //stops infor from going into web link 
    e.preventDefault();
    console.log("we did it");
} 

document.getElementById("form").onsubmit = evaluateForm;