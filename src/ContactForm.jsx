import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import keys from './config';

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true)
    setIsSent(false)
    setError(null)

    emailjs.sendForm(
      keys.service_id,
      keys.template_id,
      form.current,
      keys.public_key
    ).then((result) => {
      console.log(result)
      setIsSent(true)
      form.current.reset()
    }).catch((error) => {
      console.log(error)
      setError('Something went wrong!')
    })

    
    setIsSending(false);

  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form ref={form} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            name="name"
            type="text"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email1"
            type="email"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="content"
            rows="4"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {isSent && <p className='text-green-500'>Message sent successfully</p>}
        {error && <p className='text-red-500'>{error}</p>}
        <button
          type="submit"
          disabled={isSending}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
