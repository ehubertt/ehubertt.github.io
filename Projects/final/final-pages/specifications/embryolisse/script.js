const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const logoLink = () => {
    window.location.href= "https://ehubertt.github.io/Projects/final/final-pages/home/index.html";
}
document.getElementById("logo").onclick = logoLink;

document.getElementById("hamburger").onclick = showHideNav;
