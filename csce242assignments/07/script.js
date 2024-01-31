// Emma Hubert

const changePic = () => {
    
    const messageP = document.getElementById("swap");
    messageP.src="images/img2.png";
    
};
const addStar = () => {
    
    const Star = document.getElementById("star");
    starsss.innerHTML ="&#9733";
    Star.appendChild(starsss);
    
};


document.getElementById("swap").onclick = changePic;
document.getElementById("star").onclick = addStar;


