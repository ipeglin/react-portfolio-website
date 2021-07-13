import React from 'react'

function ContactFormSection() {
    return (
        <div className="wrapper">
            <section className="contact-form-section">
                <div className="constact-form-container">
                    <h2>Message me</h2>
                    <form method="post" action="../assets/index.php">
                        <input name="name" placeholder="Name" />
                        <input name="email" type="email" placeholder="E-mail" />
                        <textarea name="message" placeholder="Message" />

                        <input id="submit" name="submit" type="submit" value="Submit" />
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactFormSection
