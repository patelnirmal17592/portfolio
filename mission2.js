function buttonFunction() {

    let hiddenDiv = document.querySelector('.hiddenEmailForm');

    if (hiddenDiv.style.display == 'none') {
        hiddenDiv.style.display = 'block';
    };

}

function closeDiv() {
    let hiddenDiv = document.querySelector('hiddenEmailForm');

    if (hiddenDiv.style.display == 'block') {
        hiddenDiv.style.display = 'none';
    };

}
