import { useState } from 'react';
import './ContactForm.sass';
import { useNavigate } from 'react-router';


export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();


    const submitContactForm = (event) => {
        
        event.preventDefault();

        if (!name || !email || !subject || !message) {
            alert("One or more fields are empty.");
            return;
        }

        const formData = new FormData(event.target);

        const data = {
            "name": formData.get("name"),
            "email": formData.get("email"),
            "subject": formData.get("subject"),
            "message": formData.get("message")
        };

        fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            alert("Message sent!");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        });

    }

    return (
        <form className="contact-form" onSubmit={submitContactForm}>
            <label htmlFor="name" className='contact-form__label'>
                <p>Full Name <span>*</span></p>
                <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
            </label>
            
            <label htmlFor="email" className='contact-form__label'>
                <p>Email <span>*</span></p>
                <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </label>

            <label htmlFor="subject" className='contact-form__label'>
                <p>Subject <span>*</span></p>
                <input type="text" id="subject" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} required />
            </label>

            <label htmlFor="message" className='contact-form__label'>
                <p>Message <span>*</span></p>
                <textarea id="message" name="message" rows="5" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>
            </label>

            <button type="submit" className='contact-form__button'>Submit</button>
        </form>
    )
}