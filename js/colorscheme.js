//bg: #333 name-color: #ddd gray: c2c2c2 strong-blue: #479ee8

onload = (event) => {

    if(isBlackColorscheme()) {
        applyChange(false);
    } else {
        applyChange(true);
    }

};

function isBlackColorscheme() {
    return localStorage.getItem("theme") === 'black';
}

function changeTheme() {
    applyChange(isBlackColorscheme());
}

function applyChange(isBlackColorscheme) {


    var body = document.querySelector('body');

    const colorschemeButton = document.querySelector('#colorscheme-button i');
    colorschemeButton.classList.remove("red");
    

    if (isBlackColorscheme) {
        colorschemeButton.classList.remove("fa-solid");
        colorschemeButton.classList.remove("fa-sun");
        colorschemeButton.classList.add("fa-solid");
        colorschemeButton.classList.add("fa-moon");
        body.style.setProperty('--background-color', '#fff');
        body.style.setProperty('--name-color', '#484848');
        body.style.setProperty('--gray', '#262626');
        body.style.setProperty('--strong-blue', '#3a81bd');

        body.style.setProperty('--post-container-bg', '#f9f9f9');
        body.style.setProperty('--post-container-border-bg', '#ddd');
        body.style.setProperty('--post-container-date-fg', '#333');

        localStorage.setItem("theme", "white");
    } else {
        colorschemeButton.classList.remove("fa-solid");
        colorschemeButton.classList.remove("fa-moon");
        colorschemeButton.classList.add("fa-solid");
        colorschemeButton.classList.add("fa-sun");
        body.style.setProperty('--background-color', '#333');
        body.style.setProperty('--name-color', '#ddd');
        body.style.setProperty('--gray', '#c2c2c2');
        body.style.setProperty('--strong-blue', '#479ee8');

        body.style.setProperty('--post-container-bg', '#4f4f4f');
        body.style.setProperty('--post-container-border-bg', '#464646');
        body.style.setProperty('--post-container-date-fg', '#b0b0b0');

        localStorage.setItem("theme", "black");
    }

}