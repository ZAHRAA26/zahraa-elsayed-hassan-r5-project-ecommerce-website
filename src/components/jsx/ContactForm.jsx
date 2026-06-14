import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import './ContactForm.css'; // Assuming you have a CSS file for styling


// ── VALIDATION SCHEMA ────────────────────────────────────────────────────
const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),

  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Please enter a valid email address'),

  phone: yup
    .string()
    .trim()
    .matches(/^[0-9+\s-]{8,15}$/, {
      message: 'Please enter a valid phone number',
      excludeEmptyString: true,
    }),

  subject: yup
    .string()
    .required('Please select a subject'),

  message: yup
    .string()
    .trim()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters'),
}).required();

// ── COMPONENT ────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    // Replace with your real API call / email service
    await new Promise((res) => setTimeout(res, 1000));
    console.log('Form data:', data);

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-eyebrow">Get In Touch</span>
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Have a question about an order, a product, or anything else? Send us a message and we'll get back to you.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className={errors.name ? 'input-error' : ''}
                {...register('name')}
              />
              {errors.name && <span className="error-msg">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className={errors.email ? 'input-error' : ''}
                {...register('email')}
              />
              {errors.email && <span className="error-msg">{errors.email.message}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number <span className="optional">(optional)</span></label>
              <input
                id="phone"
                type="tel"
                placeholder="+20 123 456 7890"
                className={errors.phone ? 'input-error' : ''}
                {...register('phone')}
              />
              {errors.phone && <span className="error-msg">{errors.phone.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                className={errors.subject ? 'input-error' : ''}
                {...register('subject')}
                defaultValue=""
              >
                <option value="" disabled>Select a subject</option>
                <option value="order">Order Inquiry</option>
                <option value="product">Product Question</option>
                <option value="return">Returns &amp; Refunds</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && <span className="error-msg">{errors.subject.message}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className={errors.message ? 'input-error' : ''}
              {...register('message')}
            />
            {errors.message && <span className="error-msg">{errors.message.message}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitted && (
            <div className="success-msg">
              ✓ Your message has been sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
