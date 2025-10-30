import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./ContactMe.css";

const ContactMe = (props) => {
  const form = useRef();
  const [notification, setNotification] = useState(null);

  const SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_n08f5j5";
  const TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_evzy425";
  const PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "QMJVlOgGQ92prYMvS";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          // ✅ Show success message
          setNotification({
            message: "✅ Message sent successfully!",
            type: "success",
          });
          form.current.reset();

          // Auto hide after 2 seconds
          setTimeout(() => setNotification(null), 2000);
        },
        (error) => {
          // ❌ Show error message
          console.log(error);
          setNotification({
            message: "❌ Failed to send message. Please try again.",
            type: "error",
          });

          setTimeout(() => setNotification(null), 2000);
        }
      );
  };

  return (
    <div id={props.id}>
      {/* ✅ Same heading style as testimonial */}
      <ScreenHeading title={"Contact Me"} subHeading={"Get In Touch"} />

      <section className="contact-section">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">Send Message</button>

          {/* ✅ Notification message */}
          {notification && (
            <div className={`notification ${notification.type}`}>
              {notification.message}
            </div>
          )}

          {/* ==== SOCIAL LINKS ==== */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/utkarsh-raghuvanshi-46b11720a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/UtkarshRaghuvansh1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/raghuvanshi_utkarsh30/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
