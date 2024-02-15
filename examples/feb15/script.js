

const numLoop = () => {
    const numList = document.getElementById("num-list");
    numList.innerHTML = ""; //clear for each entry
    const errorP = document.getElementById("error-nums");
    errorP.innerHTML = "";


    //get starting and ending numbers
    let startNum = document.getElementById("txt-start-num").value;
    let endNum = document.getElementById("txt-end-num").value;

    //make sure it is number and field is not blank
    if(isNaN(startNum) || isNaN(endNum) || startNum.trim()=="" || endNum.trim()=="") {
        errorP.innerHTML = "You must enter number(s)";
        return;
    }

    startNum = parseInt(startNum);
    endNum= parseInt(endNum);

    if(startNum >= endNum) {
        errorP.innerHTML="Ending number must be larger than starting number";
        return;
    }

    //console.log(`looping from ${startNum} to ${endNum}.`);

    //create an li for each number and append it to the list
    for(let i=startNum; i<endNum+1; i++) {
        const li = document.createElement("li");
        li.innerHTML = `My Number: ${i}`; //back ticks let you insert variables like "+dhdh+" in java
        numList.append(li);
    }
}

let updateCount;
let counter=0;

const startStopCount = (e) => {
    

    const countP = document.getElementById("count-p"); //access paragraph

    

    if(e.target.innerHTML.toLowerCase()=="start"){
        e.target.innerHTML = "Stop"; // chnages button from start to stop

        updateCount = setInterval(()=>{
            counter++;
            countP.innerHTML = counter;
        }, 1000);
    }
    else {
        e.target.innerHTML="Start";
        clearInterval(updateCount);
    }
}

const showDetails = (e) => { //e is the item that was clicked
    console.log(e.target.getAttribute("rel"));

}

document.getElementById("btn-loop-nums").onclick = numLoop;
document.getElementById("btn-count").onclick = startStopCount;

document.querySelectorAll("#toys li").forEach((li)=> { //for everyone of the list items we are going to envoke a function
    console.log(li);
    li.onclick= showDetails;
})