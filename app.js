const input = document.getElementById('username');

input.addEventListener('focus', () => {
    input.parentElement.classList.add('focused')
})

input.addEventListener('blur', () => {
    input.parentElement.classList.remove('focused')
})

const passwordInput = document.getElementById('password')

passwordInput.addEventListener('focus' ,()=> {
    passwordInput.parentElement.classList.add('focused')

})
passwordInput.addEventListener('blur' ,() =>{
passwordInput.parentElement.classList.remove('focused')
})