//const attribution = document.getElementById("attribute");

let images = [];
images['<img src= "images/garden.jpg"/>'] = '<a href="https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7"> Image by vecstock</a> on Freepik';
images["<img src= 'images/golden.jpg'/>"]= '<a href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik';
images["<img src= 'images/mountain-lake.jpg'/>"]= '<a href="https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"> Image by wirestock </a>on Freepik';
images["<img src= 'images/small-house.jpg'/>"]= '<a href="https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"> Image by wirestock </a>on Freepik';
images["<img src= 'images/snow.jpg'/>"]= '<a href="https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4"> Image by wirestock </a>on Freepik' ;


const slide = () => {
    // find child of banner that does not contain the class of hidden 
    const currentAd = document.querySelector("#banner-div :not(.hidden)");
    let nextAd = currentAd.nextElementSibling; 

    //on the last Ad
    if(nextAd == null) {
        nextAd = document.querySelector("#banner-div :first-child");
    }
 
    currentAd.classList.add("hidden");
    nextAd.classList.remove("hidden");
    
}

setInterval(slide, 2000); // slides every 2 seconds 

const showImageA = () => {
    const imageDiv = document.getElementById("images-attributes");
    for(let image in images) {
        const img = document.createElement("p");
        const p = document.createElement("p");
        img.innerHTML = image;
        p.innerHTML = images[image];
        imageDiv.append(img);
        imageDiv.append(p);
        //imageDiv.innerHTML = `${images}`;
        //imageDiv.innerHTML = `${images[image]}`;
    }
}

showImageA();