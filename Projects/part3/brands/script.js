const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};
const logoLink = () => {
    window.location.href= "https://ehubertt.github.io/Projects/part3/home/index.html";
}

document.getElementById("logo").onclick = logoLink;
document.getElementById("hamburger").onclick = showHideNav;

const getBrands  = async () => {
    const url = "https://ehubertt.github.io/Projects/part3/brands/brands.json";

    try{
        const response = await fetch(url);
        return response.json();
    }catch(error){
        console.log(error);
    }
}

const showBrands = async() => {
    const brands = await getBrands();
    const brandList = document.getElementById("main-content");

    brands.forEach(brand => {
        brandList.append(getBrandSection(brand));
    })
}

const getBrandSection = (brand) => {
    //create div for two brands to flex 
    const div = document.createElement("section");
    div.className = "brand-box";
    //create section for brand 
    const brandSection = document.createElement("section");
    brandSection.className = "brand";
    div.appendChild(brandSection);

    // create section for name inside brand section
    const name = document.createElement("section");
    name.className = "name";
    name.innerHTML = `<b>${brand.name}</b>`
    brandSection.appendChild(name);

    //add image section below name 
    const image = document.createElement("img");
    image.className = "images";
    image.src = `${brand.main_image}`;
    brandSection.appendChild(image);

    //add description below image 
    const description = document.createElement("p");
    description.innerHTML = `${brand.decsription}`;
    brandSection.appendChild(description);

    //add array of available products 
    const products = document.createElement("p");
    products.className = "productsList";
    products.innerHTML = `<b>Some Products offered by the brand:</b> ${brand.products.join(", ")}`;
    brandSection.appendChild(products);

    return div;



}


const resetForm = () => {
    const form = document.getElementById("add-brand-form");
    form.reset();
    document.getElementById("product-boxes").innerHTML = "";
    document.getElementById("img-prev").src = "";
};

const showBrandForm = (e) => {
    e.preventDefault();
    openDialog("add-brand-form");
    resetForm();
};
  
const addProduct = (e) => {
    e.preventDefault();
    const section = document.getElementById("product-boxes");
    const input = document.createElement("input");
    input.classList.add("product-box");
    input.type = "text";
    input.placeholder = "enter product"
    section.append(input);
};
  
const openDialog = (id) => {
    document.getElementById("dialog").style.display = "block";
    document.querySelectorAll("#dialog-details > *").forEach((item) => {
      item.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
};

const getProducts = () => {
    const inputs = document.querySelectorAll("#product-boxes input");
    const products = [];
  
    inputs.forEach((input)=>{
        products.push(input.value);
    });
  
    return products;
}

const cancel = () => {
    resetForm();
    document.getElementById("dialog").style.display = "none";
}

window.onload = () => showBrands();

//document.getElementById("add-brand-form").onsubmit = addBrand;
document.getElementById("brand-btn").onclick = showBrandForm;
document.getElementById("add-product").onclick = addProduct;
document.getElementById("cancel").onclick = cancel;
  
document.getElementById("img").onchange = (e) => {
    if (!e.target.files.length) {
      document.getElementById("img-prev").src = "";
      return;
    }
    document.getElementById("img-prev").src = URL.createObjectURL(
      e.target.files.item(0)
    );
};

const showEmailResult = async(e) => {
    e.preventDefault();
  
    const result = document.getElementById("result");
    let response = await getEmailResult();
  
    if(response.status == 200){
        result.innerHTML = "Successful!!";
        submitBrandsForm(e);
    } else {
        result.innerHTML = "Sorry, your email was not sent";
    }
  
  };
  
  
  const getEmailResult = async() => {
    const form = document.getElementById("add-brand-form");
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
        result.innerHTML = "Sorry, your submission couldn't be sent";
    }
  };
  
  
  
  const submitBrandsForm = (e) => {
    
    e.preventDefault();
    const form = e.target;
    const name = form.elements["name"].value;
    //name.className = "name";
    const description = form.elements["description"].value;
    const image = form.elements["img"].value;
    image.className = "images";

    console.log(image);
    const section = document.getElementById("brand-details");
    const brandBox = document.createElement("section");
    brandBox.className = "brand-box";
    const favDiv = document.createElement("section");
    const products = getProducts();
    products.className = "productsList";
    console.log(products);
    favDiv.className = "brand";
    favDiv.innerHTML = 
    `<h2 class="name" >${name}</h2>
    <img src=${image}>
    <p>${description}</p>
    <p><b>Some Products offered by the brand:</b> ${products.join(" , ")}</p>`
    brandBox.appendChild(favDiv);
    section.appendChild(brandBox);
    form.reset();
  };

document.getElementById("add-brand-form").onsubmit = showEmailResult;