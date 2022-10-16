import * as basicLightbox from 'basiclightbox'

const refs = {
    hireMe: document.querySelector('.hire-me'),
};

refs.hireMe.addEventListener('click', (e) => {
    e.preventDefault();
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