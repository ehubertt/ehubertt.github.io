let count =1;
const interval = setInterval(()=>{
    
    // access the class with "items" and give me all the sections within it
    const allSections = document.querySelectorAll(".items section");
    allSections.forEach((section)=> {
        section.classList.remove("highlighted");
    });

    if(count > allSections.length) {
        count=1;
        // to onky go one round
        //clearInterval(interval);
        //return;
    }

    // should get the first item, add the highlight and then after half a second remove it, moving throughout the section
    document.querySelector(`.items section:nth-child(${count})`).classList.add("highlighted");
            

    count++;
}, 500); // function will be executed every half second

// another (better) way to achieve this on dicord 

