const buttonToggle = document.querySelector('.button-toggle');
const menu_button_toggle = document.querySelector('.button-toggle i');
const menu_drop_Down = document.querySelector('.menu-dropdown');

buttonToggle.onclick = function () {
    menu_drop_Down.classList.toggle('open');

    let isOpen = menu_drop_Down.classList.contains('open');

    menu_button_toggle.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}