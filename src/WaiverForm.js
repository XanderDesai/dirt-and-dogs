import React, {useState} from 'react';
import './WaiverForm.css'; // Import the styles

function WaiverForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Let Netlify handle it, but still capture submission for UI feedback
    const form = e.target;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };
  if (submitted) {
      return (
        <div className="waiver-wrapper">
            <div className="confirmation-banner">
              <h2>Submission Received ✅</h2>
              <p>Thanks for signing the waiver. You're all set!</p>
              <a href="/" className="return-button">Return to Home</a>
            </div>
        </div>
      );
  }
  else {
      return (
        <div className="waiver-wrapper">
          <form
            name="bike-waiver"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="waiver-form"
            onSubmit={handleSubmit}
            netlify
          >
            {/* Netlify hidden input */}
            <input type="hidden" name="form-name" value="bike-waiver" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <h2>Bike Ride Waiver</h2>

            <label>
              Full Name:
              <input type="text" name="name" required />
            </label>

            <label>
              Email:
              <input type="email" name="email" required />
            </label>

            <label>
              Emergency Contact:
              <input type="text" name="emergency_contact" />
            </label>

            <label>
              Emergency Contact Number:
              <input type="text" name="emergency_contact_number" />
            </label>

            <label>
              Waiver Acknowledgment:
              <p>
                By signing this waiver, I acknowledge that I am participating in all Dirt and Dogs bike rides at my own risk. I acknowledge that I am not receiving any official riding instruction or supervision. I will hold no ride organizers responsible for any injury that may occur during any part of the event.
              </p>
            </label>

            <button type="submit">Sign Waiver</button>
          </form>
        </div>
      );
  }
}

export default WaiverForm;
