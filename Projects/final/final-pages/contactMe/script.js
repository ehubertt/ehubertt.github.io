const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const logoLink = () => {
  window.location.href= "https://ehubertt.github.io/Projects/part3/home/index.html";
}


document.getElementById("logo").onclick = logoLink;
document.getElementById("hamburger").onclick = showHideNav;

const showEmailResult = async(e) => {
    e.preventDefault();

    const result = document.getElementById("result");
    let response = await getEmailResult();

    if(response.status == 200){
        result.innerHTML = "Email successfully sent";
    } else {
        result.innerHTML = "Sorry, your email was not sent";
    }

};

const getEmailResult = async() => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait....";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });

        return response;
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
};

document.getElementById("contact-form").onsubmit = showEmailResult;