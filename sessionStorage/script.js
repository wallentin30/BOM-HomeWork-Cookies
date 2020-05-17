const radioButtons = document.getElementsByName('language');

for(let i=0; i < radioButtons.length; i++) {
    if(typeof(Storage) !== 'undefined') {
        let language = sessionStorage.getItem('language');

       if(radioButtons[i].value === language) {
        radioButtons[i].checked = 'checked';
       }
        
    }

    radioButtons[i].addEventListener('click', function(event) {
        sessionStorage.setItem('language', event.target.value)
    })
}