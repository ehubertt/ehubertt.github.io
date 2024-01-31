// Emma Hubert

const doStuff = () => {
    
    const messageP = document.getElementById("message");
    messageP.innerHTML ="Hello Emma!";
    messageP.classList.add("special");
};

const hideStrawberry = () => {
    document.getElementById("strawberry").classList.add("hidden");
};

document.getElementById("btn-click").onclick = doStuff;
document.getElementById("strawberry").onclick = hideStrawberry;

