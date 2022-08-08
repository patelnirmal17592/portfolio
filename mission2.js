
// Button to bring out form
function buttonFunction() {

    let hiddenDiv = document.querySelector('.hiddenEmailForm');

    if (hiddenDiv.style.display == 'none') {
        hiddenDiv.style.display = 'block';
    };

}

// Button to close and cancel form
function closeDiv() {
    let hiddenDiv = document.querySelector('hiddenEmailForm');

    if (hiddenDiv.style.display == 'block') {
        hiddenDiv.style.display = 'none';
    };

}
