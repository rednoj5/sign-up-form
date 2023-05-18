const pwd = document.querySelector('#pwd');
const pwdconf = document.querySelector('#pwdconf');
const phone = document.querySelector('#phone');

console.log(phone.checkValidity())

function validatePassword() {
    if (this.value !== pwd.value) {
        this.setCustomValidity('It must much the password!')
    } else {
        this.setCustomValidity('');
    }
};

pwdconf.addEventListener('input', validatePassword);