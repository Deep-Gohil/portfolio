var typed = new Typed('#element', {
    strings: ['Web Designer', 'Web Developer'],
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


function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// copied from chat GPT 
document.getElementById('mobile-number').addEventListener('click', function () {
    const mobileNumber = this.innerText;
    if (isMobileDevice()) {
        window.location.href = `tel:${mobileNumber}`;
    } else {
        navigator.clipboard.writeText(mobileNumber)
            .then(() => {
                alert('Mobile number copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy number: ', err);
            });
    }
});
document.getElementById('email').addEventListener('click', function () {
    const email = this.innerText;
    window.location.href = `mailto:${email}`;
});