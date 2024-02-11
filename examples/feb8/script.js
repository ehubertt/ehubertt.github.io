// Emma Hubert
console.log("whyyyy");
const updateTemp = () => {
    const goal = 10000;
    const funds = document.getElementById("txt-funds").value;
    const errorSpan = document.getElementById("funds-error");
    errorSpan.innerHTML = " ";
    const therm = document.getElementById("temp");
    document.querySelector(":root").style.setProperty('--funds', "0%"); // reset to 0 incase invalid input

    if(isNaN(funds)) {
        errorSpan.innerHTML = "* Not a valid number";
    }
    else if (funds < 0){
        errorSpan.innerHTML = "* Negative number";
    }

    const percent = funds/goal*100;
    document.querySelector(":root").style.setProperty('--funds', percent + "%");
};

const evalForm = (e) => {
    e.preventDefault();
    
    
};

document.getElementById("btn-content").onclick = updateTemp;
document.getElementById("my-form").onsubmit = evalForm;