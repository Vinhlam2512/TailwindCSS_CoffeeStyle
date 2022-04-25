const topMenu = document.querySelector('#lv-top-menu');
const toggleTopMenuIcon = document.querySelector('#lv-toggle-top-menu-icon');

document.addEventListener('click', function (e) {
    if (toggleTopMenuIcon.contains(e.target)) {
        // if click to Toggle Top Menu icon
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('lv-topMenu-expanded');
    } else {
        // if click outside Toggle Top Menu icon
        if (topMenu.classList.contains('lv-topMenu-expanded')) {
            topMenu.classList.add('hidden');
            topMenu.classList.remove('lv-topMenu-expanded');
        }
    }
});
