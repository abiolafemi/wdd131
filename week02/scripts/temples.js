const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const dynamicTitle = document.querySelector('#dynamic-title-container');

// Function to handle screen size change
function handleScreenSizeChange() {
    if (window.innerWidth >= 900) {
        //This will ensure in case menu has not been closed and screen sized increased to return to original state
        navigation.classList.remove('open');
        hamButton.classList.remove('open');
        dynamicTitle.classList.remove('open');
    }
}

// Function to toggle classes on button click, only utilized when menu button is displayed that appears only for smaller devices
function toggleClasses() {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    dynamicTitle.classList.toggle('open');
}

// Listen to screen size changes
window.addEventListener('resize', handleScreenSizeChange);

// Listen to button click
hamButton.addEventListener('click', toggleClasses);