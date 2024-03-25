const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const logoLink = () => {
  window.location.href= "https://ehubertt.github.io/Projects/part3/home/index.html";
}

const showEmailResult = async(e) => {
  e.preventDefault();

  const result = document.getElementById("result");
  let response = await getEmailResult();

  if(response.status == 200){
      result.innerHTML = "Successful!!";
      subitFavoritesForm(e);
  } else {
      result.innerHTML = "Sorry, your email was not sent";
  }


};


const getEmailResult = async() => {
  const form = document.getElementById("favorites-form");
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



const subitFavoritesForm = (e) => {
  
  e.preventDefault();
  const form = e.target;
  const name = form.elements["name"].value;
  const description = form.elements["description"].value;
  const image = form.elements["image"].value;
  image.classList = "form-image";
  const product1 = form.elements["product1"].value;
  const product2 = form.elements["product2"].value;
  const product3 = form.elements["product3"].value;
  const product4 = form.elements["product4"].value;
  const products = [];
  products.push(form.elements["product1"].value);
  products.push(form.elements["product2"].value);
  products.push(form.elements["product3"].value);
  products.push(form.elements["product4"].value);
  

  const section = document.getElementById("user-favorites");
  const favDiv = document.createElement("section");
  favDiv.className = "user-favorite";
  favDiv.innerHTML = 
  `<h2>${name}</h2>
  <img src=${image}>
  <p><b>Description:</b> ${description}</p>
  <p><b>Products:</b> ${products.join(", ")}</p>`
  section.appendChild(favDiv);

  // resources like W3 schools and others used to help stringify and save info from form
  // Save the information
  /*const favoritesList = JSON.parse(localStorage.getItem("favoritesList")) || [];
  const newFavorite = {
    category: category,
    userName: userName,
    categoryName: categoryName,
    whyLove: whyFav
  };
  favoritesList.push(newFavorite);
  localStorage.setItem("favoritesList", JSON.stringify(favoritesList));*/

  // Clear form fields after submission
  form.reset();
};

// Function to load saved favorites from Local Storage
/*const loadSavedFavorites = () => {
  const favoritesList = JSON.parse(localStorage.getItem("favoritesList")) || [];
  const section = document.getElementById("user-favorites");
  favoritesList.forEach((favorite) => {
    const favDiv = document.createElement("section");
    favDiv.className = "user-favorite";
    favDiv.innerHTML = 
      `<h2>${favorite.categoryName}</h2>
      <h3>Type: ${favorite.category}</h3>
      <h4>Entry by: ${favorite.userName}</h4>
      <p><b>Why ${favorite.userName} loves ${favorite.categoryName}:</b> ${favorite.whyLove}</p>`;
    section.appendChild(favDiv);
  });
};*/

document.getElementById("logo").onclick = logoLink;
document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("favorites-form").onsubmit =  showEmailResult;

//window.addEventListener("load", loadSavedFavorites);