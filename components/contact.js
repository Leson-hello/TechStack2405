function ContactFormComponent() {
    // Create the form element
    const form = document.createElement("form");
    form.style.marginLeft = '50px'; // Hoặc form.style.paddingLeft = '50px';
    form.style.marginRight = '50px'; // Hoặc form.style.paddingRight = '50px';
    
    // Add HTML content for the form
    form.innerHTML = `
        <div class="contact-container">
            <h2 style="padding-top: 50px; font-size: 36px; font-weight: bold;">Contact Us</h2>
            <div class="row">
                <div class="form-group col-6">
                    <label for="full-name">FULL NAME</label>
                    <input type="text" id="full-name" placeholder="Name" />
                </div>
                <div class="form-group col-6">
                    <label for="email-address">EMAIL ADDRESS</label>
                    <input type="email" id="email-address" placeholder="Email" />
                </div>
            </div>
            <div class="form-group">
                <label for="subject">SUBJECT</label>
                <input type="text" id="subject" placeholder="Subject" />
            </div>
            <div class="form-group">
                <label for="message">MESSAGE</label>
                <textarea id="message" placeholder="Message"></textarea>
            </div>
            <div class="row">
                <div class="col-3">
                    <button id="submit" type="submit" style="padding-left: 0px;">Send Message</button>
                </div>
            </div>
        </div>
    `;

    return form;
}

// Attach the ContactFormComponent to the desired element
const contactFormElements = document.querySelectorAll("ContactFormComponent"); // array
for (let item of contactFormElements) {
    item.appendChild(ContactFormComponent()); // append the contact form component
}
