import React from 'react';
import './ContactForm.css';
import '../../App.css';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xnqwndej");
    if (state.succeeded) {
        return (
            <div id="success-response">
                <p>Many thanks for your inquiry!</p>
            </div>
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <br />
            <label htmlFor="email">
                Email Address
            </label>
            <br />
            <input
                id="email"
                type="email"
                name="email"
                placeholder="foo@bar.com"
                className="no-outline"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <br /><br />
            <label htmlFor="message">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                className="no-outline"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <br />
            <div>
                <button id="submit" type="submit" disabled={state.submitting}>
                    Send
                </button>
            </div>
        </form>
    )
}

export default ContactForm;