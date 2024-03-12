
// NOT CORRECT, CHECK DISCORD. JUST DO NOT COPY PORTIAS ACCESS CODE

const showEmailResult = async(e) => {
    e.preventDefault;
    
    const result = document.getElementById("result");
    let response = getEmailResponse();

    if(response.status == 200){
        result.innerHTML = "Email successfully sent";
    } else {
        result.innerHTML = "Sorry, your email was not sent";
    }
}

const getEmailResult= async() => {

    // converting into JSON string
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = object.formEntries(formData);
    const json = JSON.stringify(object);
    const result = getElementById("result");
    result.innerHTML = "Please wait...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST" , 
            headers: {
                "Content-Type": "application/json",
                Accept:"application/json"
            },
            body: json
        });

        return response; 

    } catch(error) {
        console.long(error);
        result.innerHTML = "Sorry, your email could not be sent";
    }
}

document.getElementById("contact-form").onsubmit = showEmailResult;