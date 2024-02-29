//https://api.openbrewerydb.org/breweries

const getBreweries = async() => {
    try{
        return (await fetch("https://api.openbrewerydb.org/breweries")).json(); 
    }catch(error){
        console.log(error);
    }
}

const showBreweries = async() => {
    const breweries = await getBreweries();

    breweries.forEach((brewery) => {
        const allBsSection = document.getElementById("breweries-section");
        const brewerySection = document.getElementById("section");
        allBsSection.append(brewerySection);

        brewerySection.classList.add("brewery");
    });

}

showBreweries();

//code not working check dicord for portias 