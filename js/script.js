var typed = new Typed('#element', {
    strings:['Web Designer','Web Developer'],
    typeSpeed: 100,
});

let tabLinks = document.querySelectorAll(".tabLinks");
let tabContents = document.querySelectorAll(".tabContent");

const opentab = (tabname) => {
    tabLinks.forEach((link) => {
        link.classList.remove("activeLinks");
    });

    tabContents.forEach((content) => {
        content.classList.remove("activeTab");
    });

    document.querySelector(`.tabLinks[onclick="opentab('${tabname}')"]`).classList.add("activeLinks");
    document.getElementById(tabname).classList.add("activeTab");
};

let sidemenu = document.getElementById("sidemenu");
    
    const handleOpenMenu = () => {
        sidemenu.style.right = "0"
    }

    const handleCloseMenu = () => {
        sidemenu.style.right = "-200px"
    }

    document.getElementById("openmenu").addEventListener("click", handleOpenMenu)
    document.getElementById("closemenu").addEventListener("click", handleCloseMenu)

    