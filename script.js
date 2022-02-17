'use strict';
const f = document.querySelector('.form');
let firstName = form.elements.fn;
let lastName = form.elements.ln;
let email = form.elements.email;
let signUp = form.elements.signup;
let man = form[3];
let woman = form[4];
let choose = document.querySelector('.choose');
let frontend = document.querySelector('.frontend');
let backend = document.querySelector('.backend');
let user = document.querySelector('.user');
let userImg = document.querySelector('.user__img');
let qc = document.querySelector('.qc');
let signOut = document.querySelector('.signout');
let agree = form.elements.agree;
let position;

function positionFunc() {
    if (document.querySelector('.frontend').selected) {
        position = frontend.textContent;
    } else if (document.querySelector('.backend').selected) {
        position = backend.textContent;
    } else if (document.querySelector('.qc').selected) {
        position = qc.textContent;
    }
    return position;
}
signUp.addEventListener('click', function(event) {
    if (
        agree.checked &&
        firstName.value &&
        lastName.value &&
        email.value &&
        (qc.selected || backend.selected || frontend.selected)
    ) {
        event.preventDefault();
        positionFunc();
        user.classList.remove('hidden');
        f.classList.add('hidden');
        document.querySelector('.user__name').textContent =
            firstName.value + ' ' + lastName.value;
        document.querySelector('.user__email').textContent = email.value;
        document.querySelector('.user__position').textContent = position;
        if (man.checked) {
            userImg.style.backgroundImage = `url('img/man.png')`;
        } else {
            userImg.style.backgroundImage = `url('img/woman.jpg')`;
        }
    }
});
signOut.addEventListener('click', function() {
    document.location.reload();
});