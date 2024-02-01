// Emma Hubert

const changePic = () => {
    
    const messageP = document.getElementById("swap");
    messageP.src="images/img2.png";
    
};

const addStar = () => {
    console.log("stars");
    const playground = document.getElementById("star-playground");
   playground.innerHTML += "<img src= 'images/star.png'/>";
}


document.getElementById('rotationSlider').addEventListener('input', function() {
    const rotationValue = this.value;
    document.getElementById('rotatingImage').style.transform = `rotate(${rotationValue}deg)`;
});  



document.getElementById("swap").onclick = changePic;
document.getElementById("star-column").onclick=addStar;


