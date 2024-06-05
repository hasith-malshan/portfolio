import { useRef, useState } from 'react';
import './contact.scss';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const varients = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: '-100px' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_38sdbmt', 'template_k2v6h6n', formRef.current, {
        publicKey: 'a27p_u9NtNEjxnE1g',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);
        }
      )
      .finally((e) => {
        e.target.reset();
      });
  };
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={varients}
      initial="initial"
      whileInView={'animate'}
    >
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Email</h2>
          <span>h.malshan.53@gmail.com</span>
        </div>
        <div className="item">
          <h2>LinkedIn</h2>
          <span>h.malshan.53@gmail.com</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>h.malshan.53@gmail.com</span>
        </div>
      </div>
      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          action=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
        >
          <input type="text" required placeholder="John Doe" name="name" />
          <input
            type="email"
            required
            placeholder="email@email.com"
            name="email"
          />
          <textarea
            name="message"
            id=""
            rows="10"
            placeholder="Enter your messege"
          ></textarea>
          <button type="submit">Submit</button>
          {error && 'Error'}
          {success && 'Success'}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
