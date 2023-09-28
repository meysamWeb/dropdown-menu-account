/*=============== DROPDOWN JS ===============*/
const showDropdown = (content, button) => {
    const dropdownContent = document.getElementById(content),
        dropdownButton = document.getElementById(button),
        dropdownMenu = document.querySelector('.dropdown__menu');
    let clicked = false;
    let timeout;

    // Show the dropdown when mouse enters the button
    dropdownButton.addEventListener('mouseenter', () => {
        if (!clicked) {
            dropdownContent.classList.add('show-dropdown');
        }
    });

    // Handle the dropdown display upon clicking the button
    dropdownButton.addEventListener('click', () => {
        clicked = !clicked;
        dropdownContent.classList.toggle('show-dropdown');
    });

    // Use a timeout to delay the hiding
    dropdownButton.addEventListener('mouseleave', () => {
        if (!clicked) {
            timeout = setTimeout(() => {
                if (!dropdownMenu.matches(':hover')) {
                    dropdownContent.classList.remove('show-dropdown');
                }
            }, 30); // 30 milliseconds delay
        }
    });

    dropdownMenu.addEventListener('mouseenter', () => {
        clearTimeout(timeout); // Clear the timeout if you manage to hover over the submenu
    });

    // Hide the dropdown when the mouse leaves the dropdown menu
    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownContent.classList.remove('show-dropdown');
    });
}

showDropdown('dropdown-content', 'dropdown-button');
