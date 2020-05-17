function getCookies() {
    const cookieArray = document.cookie.split(';')

    const cookieObject = {};

    cookieArray.forEach(elem => {
        const cookieValue = elem.split('=');

        cookieObject[cookieValue[0]] = cookieValue[1];

        console.log('cookieValue[0]: ', cookieValue[0]);
        console.log('cookieValue[1]: ', cookieValue[1]);
        console.log('cookieObject[cookieValue[0]]: ', cookieObject[cookieValue[0]]);
        
    })

    return cookieObject;
}

const cookieObject = getCookies();

console.log('cookieObject: ', cookieObject);

const radioButtons = document.getElementsByName('language');

for(let i=0; i < radioButtons.length; i++) {
    
    if(radioButtons[i].value === cookieObject.language) {
        radioButtons[i].checked = 'checked';
    }

    radioButtons[i].addEventListener('click', function(event) {
        document.cookie = `language=${event.target.value}`;
        
        console.log(`event: ${event.target.value}`);
        
    })
}