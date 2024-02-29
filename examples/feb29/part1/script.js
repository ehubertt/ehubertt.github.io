//"https://portiaportia.github.io/json/shoes.json"

const getShoes = async() => {
    const url="https://portiaportia.github.io/json/shoes.json";
    //this chunck of code will essentially be the same for all
    try{ //try to get information from url 
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
}

const showShoes = async() => {
    const shoes = await getShoes();

    shoes.forEach((shoe)=> {
        console.log(shoe.name);
    })
        
    
}

showShoes();

//code not finished on my end, check discord for final by portia