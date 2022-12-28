var form = document.querySelector('form');
var name = form.querySelector("div #name");
console.log(name);
var email = form.querySelector('div #email');
var password = form.querySelector('div #password');
// console.log(password);

form.addEventListener('submit', handleForm);

function handleForm(e) {
    e.preventDefault();

    var userInfo = {
        name: name.value,
        email: email.value,
        password: password.value
    }
    console.log(userInfo);
    name.value = "";
    email.value = "";
    password.value = "";
}