import './ContactForm.sass';


export default function ContactForm() {

    return (
        <form className="contact-form">
            <label htmlFor="name" className='contact-form__label'>
                <p>Full Name <span>*</span></p>
                <input type="text" id="name" name="name" required />
            </label>
            
            <label htmlFor="email" className='contact-form__label'>
                <p>Email <span>*</span></p>
                <input type="email" id="email" name="email" required />
            </label>

            <label htmlFor="subject" className='contact-form__label'>
                <p>Subject <span>*</span></p>
                <input type="text" id="subject" name="subject" required />
            </label>

            <label htmlFor="message" className='contact-form__label'>
                <p>Message <span>*</span></p>
                <textarea id="message" name="message" rows="5" required></textarea>
            </label>

            <button type="submit" className='contact-form__button'>Submit</button>
        </form>
    )
}