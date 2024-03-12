const submitRaccoonForm = (e) => {
    e.preventDefault(); //do not refresh page
    
    const form = e.target;
    const raccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const terms = form.elements["terms"].checked;
    //const size = getRadioValue
    console.log(raccoonName + demeanor + terms);


}

const getRadioValue = (radioName) => {
    const radios = document.getElementsByName(radioName);

    for(let i in radios) {
        if(radios[i].checked){
            return radios[i].value;
        }
    }
}

document.getElementById("form-raccoon").onsubmit = submitRaccoonForm;