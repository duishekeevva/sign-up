const loginForm = document.querySelector('#form')
const email = document.querySelector('#email')
const lastName = document.querySelector('#lastName')
const firstName = document.querySelector('#firstName')
const userName = document.querySelector('#userName')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const submit = document.querySelector('button')

loginForm.addEventListener('submit', () => {
    console.log(password.value,confirmPassword.value)
    if(
        lastName.value.length < 3
        || firstName.value.length < 3
        || userName.value.length < 3
        || password.value !== confirmPassword.value
        || password.value.length < 3
        || password.value.length > 8
    ){
        alert('Error')
    }else{
        alert(`Эл. Почта:  ${email.value} \nФамилия: ${lastName.value} \nИмя: ${firstName.value} \nИмя пользователя: ${userName.value} \nПароль:  ${password.value}`)
    }

})
