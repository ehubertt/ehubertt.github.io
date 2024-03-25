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

window.onload = () => showBrands();