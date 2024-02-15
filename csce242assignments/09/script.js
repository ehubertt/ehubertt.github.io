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




const yoga = document.getElementById("section2");
const picCommand = document.getElementById("section1");

const showHide2 = () => {
    
    if(yoga.style.display = "none") {
        yoga.style.display = "block";
    }
    picCommand.style.display = "none";
    console.log(yoga.style.display);
    
};

const showHide1 = () => {
    if(picCommand.style.display == "none") {
        picCommand.style.display = "block";
    }
    yoga.style.display = "none";
    
};

let updateCount;
let counter=1;
let pos = 0;

const bounceBall = (e) => {
    
    const moveDown = () => {
        if(pos==300){
            counter=2;
        }
        if(pos==0){
            counter=1;
        }
        if(counter==1)
        {
            pos += 10;
            const root = document.querySelector(":root");
            root.style.setProperty("--ball-top", pos + "px");
            console.log("moving down");
            console.log(counter); 
        }
        if(counter==2){
            pos-=10;
            const root = document.querySelector(":root");
            root.style.setProperty("--ball-top", pos + "px");
            console.log("moving up");
        }
    };
    

    if(e.target.innerHTML.toLowerCase()=="start"){
        e.target.innerHTML = "Stop"; // changes button from start to stop

        updateCount = setInterval(()=>{
            
            console.log(pos);
            moveDown();
        }, 10);
    }
    else {
        e.target.innerHTML="Start";
        clearInterval(updateCount);
    }
    
}


const showDetails = (e) => { 
    const description = e.target.getAttribute("rel");
    const descriptionContainer = e.currentTarget.querySelector("p"); // Find the <p> element within the clicked <li>
    descriptionContainer.textContent = description; // Set the text content of the <p> element to the description
}


document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("exercise2").onclick= showHide2;
document.getElementById("exercise1").onclick= showHide1;
document.getElementById("btn-ball").onclick= bounceBall;

document.querySelectorAll("#yoga li").forEach((li) => {
    li.onclick = showDetails;
});




 






