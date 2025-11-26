
const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const sideBar = document.getElementById('side-bar');
const OPEN_SIDE_BAR_CLASS = 'side-bar--open';

// We controleren of de knop bestaat voordat we een actie koppelen.
if (openMenuButton && sideBar) {
    openMenuButton.addEventListener("click", () => {
        sideBar.classList.add(OPEN_SIDE_BAR_CLASS);
    });
}

// We controleren of de sluitknop bestaat.
if (closeMenuButton && sideBar) {
    closeMenuButton.addEventListener("click", () => {
        sideBar.classList.remove(OPEN_SIDE_BAR_CLASS);
    });
}