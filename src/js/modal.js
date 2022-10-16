import * as basicLightbox from 'basiclightbox';
const nodemailer = require("nodemailer");

const refs = {
    hireMe: document.querySelector('.hire-me'),
    submitForm: document.querySelector('.submit-form'),
    btn: document.querySelector('.submit-btn'),
    firstName: document.querySelector('.first-name'),
    lastName: document.querySelector('.last-name'),
    email: document.querySelector('.email'),
    message: document.querySelector('.message'),
};

refs.hireMe.addEventListener('click', () => {
	basicLightbox.create(`
    <div class="modal">
        <div class="form-title">Contact form</div>
        <form class="submit-form">
            <label>
                <input type="text" name="name" class="first-name" required />
                <span>First Name</span>
            </label>
            <label>
                <input type="text" name="name" class="last-name" required />
                <span>Last Name</span>
            </label>
            <label>
                <input type="email" name="email" class="email" required />
                <span>Email</span>
            </label>
            <label>
                <textarea name="text" id="text" class="message" required></textarea>
                <span>Message</span>
            </label>
            <button type="submit" class="submit-btn">
                <div class="icon"><i class="fas fa-rocket"></i></div>
                <p class="submit-text">Submit</p>
            </button>
            </form>
        </div>
	`).show()
})


// refs.submitForm.addEventListener('submit', getValueFromFied);

// async function getValueFromFied (e) {
//     e.preventDefault();
//     refs.btn.classList.toggle('active');

//     const firstName = await refs.firstName.value;
//     const lastName = await refs.lastName.value;
//     const email = await refs.email.value;
//     const message = await refs.message.value;

//     console.log(firstName)
//     console.log(lastName)
//     console.log(email)
//     console.log(message)

// //     Email.send({
// //       Host : "smtp.elasticemail.com",
// //       Username : "myformsubmit@ukr.net",
// //       Password : "A884E32B6521C80F09D5578F3BDECFA25A02",
// //       Port: 2525,
// //       To : 'myformsubmit@ukr.net',
// //       From : email,
// //       Subject : message,
// //       Body : "And this is the body"
// //   }).then(
// //     message => alert(message)
// //   );
// }
