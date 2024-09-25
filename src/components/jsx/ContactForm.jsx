// ContactForm.jsx
import { useState } from 'react';
import * as yup from 'yup';
import Header from "./Header";
import '../style/ContactForm.css';

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // Define the Yup validation schema
  const contactFormSchema = yup.object().shape({
     name: yup
    .string()
    .min(4, 'Name must be at least 4 characters')
    .matches(/^[A-Za-z\s]+$/, 'Name can only contain letters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Email must be a valid email address, containing "@" and "."')
    .matches(/.+@.+\..+/, 'Email must contain "@" and "."')
    .required('Email is required'),
  subject: yup.string(), // Subject is optional
  message: yup
    .string()
    .min(40, 'Message must be at least 40 characters')
    .required('Message is required')
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form data against the schema
      await contactFormSchema.validate(formData, { abortEarly: false });
      setErrors({}); // Clear previous errors

      // TODO: Handle successful form submission (e.g., send data to backend)

    } catch (validationErrors) {
      // Extract and map validation errors
      const formattedErrors = {};
      validationErrors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <>
      <Header />
      <div className="contactForm">
        <div className="upContactForm">
          <h2>Get In Touch With Us</h2>
          <p>
            For More Information About Our Products & Services, Please Feel Free To Drop Us An Email. Our Staff Always
            Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
        <div className="downContactForm">
          <div className="leftDownContactForm">
            <div className="oneBlockLeftDownContactForm">
              <img src="/images/location.png" alt="Location" />
              <div className="rightOfTheBlock">
                <h5>Address</h5>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="oneBlockLeftDownContactForm">
              <img src="/images/bxs_phone.png" alt="Phone" />
              <div className="rightOfTheBlock">
                <h5>Phone</h5>
                <p>Mobile: +(84) 546-6789<br />
                   Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="oneBlockLeftDownContactForm">
              <img src="/images/bi_clock-fill.png" alt="Working Time" />
              <div className="rightOfTheBlock">
                <h5>Working Time</h5>
                <p>Monday-Friday: 9:00 - 22:00<br />
                   Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <form className="rightDownContactForm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Abc"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Abc@def.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="This is an optional"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div style={{ height: '148px'}}>
              <label htmlFor="message">Message</label>
              <textarea id="message"
                name="message" placeholder="Hi! I'd like to ask &#10;about"
                value={formData.message}
                onChange={handleChange}></textarea>

              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
