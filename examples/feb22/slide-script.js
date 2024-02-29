const slideForward = () => {
    //figure out what the next image is and then calls the slide function
    if(getCurrentImage().nextElementSibling == null) {
        slide(document.querySelector("#preview img")); //if does not have a next sibling, pick first in list
    }
    else {
        slide(getCurrentImage().nextElementSibling);
    }
};
const slideBackward = () => {
    if(getCurrentImage().previousElementSibling == null) {
        slide(document.querySelector("#preview :last-child")); //if does not have a previous sibling, pick last in list
    }
    else {
        slide(getCurrentImage().previousElementSibling);
    }
};


const slide = (nextImage) => {
    getCurrentImage().classList.add("hidden");
    nextImage.classList.remove("hidden");
};

const getCurrentImage = () => {
    return document.querySelector("#preview :not(.hidden)");
}

document.getElementById("forward-arrow").onclick = slideForward;
document.getElementById("backward-arrow").onclick = slideBackward;

document.querySelectorAll("#thumbs img").forEach((img, index) => {
    img.onclick = () => {
        slide(document.querySelector(`#preview :nth-child(${index+1})`));
    }
});