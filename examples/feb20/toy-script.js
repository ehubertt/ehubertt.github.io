
let toys = ["drum", "ball", "rope", "balloon" , "tire"];
let toyPrices = [];
toyPrices ["barbie"] = 7.54;
toyPrices ["doll house"] = 86.23;
toyPrices ["slide"] = 34.23;
toyPrices ["ken"] = 2.3;
toyPrices ["bike"] = 5.6;



const showToys = ()=> {
    // want to write toys where result is 
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
   /* for (let i in toys) { //i is a number that runs through the indicies
        console.log(toys[i]);
    }   giev you access to i */

    /* other syntax can be used: PORTIA PREFERS THIS ONE */
    toys.forEach((toy)=>{
       const p = document.createElement("p");
       p.innerHTML = toy;
       resultDiv.append(p);
    }); // for every toy (item) we will execute this function

    
}

const addToy = () => {
    const toy = document.getElementById("txt-toy").value;
    toys.push(toy);
    showToys();
}


const showToysTable = () => {

    const toyTable = document.getElementById("toy-table");
    for (let toy in toyPrices) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = toy; 
        tr.append(td);
        toyTable.append(tr);

        tr.onclick =()=> {
           //console.log(`you clicked ${toyPrices[toy]}.`);
           const descP = document.getElementById("toy-description");
           descP.innerHTML = `${toy} costs $${toyPrices[toy]}.`;
        }
        //tr.onclick = showPrice.bind(null, toy);
    }
}


/* const showPrice = (toy) => {
    console.log(toy);
} */ 


showToys();
document.getElementById("button-add-toy").onclick = addToy;
showToysTable();