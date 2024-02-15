// Emma Hubert


let rotationAngle =0;

const showHideNav = () => {
    document.getElementById("exercises").classList.toggle("hide-small");
    const triangle = document.getElementById("hamburger");
    function rotateTriangle(angle) {
        rotationAngle+=180;
        triangle.style.transform= 'rotate( '+rotationAngle+ 'deg)';
    }
    rotateTriangle();
};


const changePic = () => {
    
    const pic = document.getElementById("swap");
    const commandPic = document.getElementById("command").value;
    if(commandPic == "b") {
        pic.src="images/read.jpg";
    }
    if(commandPic == "c") {
        pic.src="images/clown.jpg";
    }
    if(commandPic == "p") {
        pic.src="images/birthday.jpg";
    }
    if(commandPic == "r") {
        pic.src="images/rain.jpg";
    }
    if(commandPic == "s") {
        pic.src="images/shovel.jpg";
    }
    if(commandPic == "w") {
        pic.src="images/work.jpg";
    }
    
    
};

const yoga = document.getElementById("section2");
const picCommand = document.getElementById("section1");
//yoga.style.display = "none";
console.log(yoga.style.display);

const showHide2 = () => {
    
    //const yoga = document.getElementById("section2");
    //const picCommand = document.getElementById("section1");
    
    if(yoga.style.display = "none") {
        yoga.style.display = "block";
    }
    picCommand.style.display = "none";
    console.log(yoga.style.display);
    
};

const showHide1 = () => {
   
    //const yoga = document.getElementById("section2");
    //const picCommand = document.getElementById("section1");
    if(picCommand.style.display == "none") {
        picCommand.style.display = "block";
    }
    yoga.style.display = "none";
    


    
};


document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("command").onkeyup= changePic;
document.getElementById("exercise2").onclick= showHide2;
document.getElementById("exercise1").onclick= showHide1;



/*
Code help and referenced from W3 schools and chatgpt, used a combination of both examples to create and customize the slider 
*/

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("myRange");
    const image = document.getElementById("image-slide");
  
    slider.addEventListener("input", function() {
      const value = parseInt(this.value);
      switch (value) {
        case 1:
            image.src = "images/yoga1.jpg";
            break;
        case 2:
            image.src = "images/yoga2.jpg";
            break;
        case 3:
            image.src = "images/yoga3.jpg";
            break;
        case 4:
            image.src = "images/yoga4.jpg";
            break;  
        case 5:
            image.src = "images/yoga5.jpg";
            break; 
        case 6:
            image.src = "images/yoga6.jpg";
            break;
        case 7:
            image.src = "images/yoga7.jpg";
            break;  
        case 8:
            image.src = "images/yoga8.jpg";
            break;            
        default:
          break;
      }
    });
}); 






