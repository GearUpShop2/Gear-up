// ContactUs.js
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to store data in the JSON file
      await axios.post('http://localhost:5002/contact', formData);

      // Display success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your message has been sent successfully.',
      });

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <div className="bg-gray-50 dark:bg-neutral-900" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
            Send your message and we will respond to you as soon as possible
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
          <div>
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p className="max-w-sm mt-4 mb-4 dark:text-neutral-400">
              Have something to say? We are here to help. Fill up the form or send
              an email or call us.
            </p>
            <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-neutral-400">
              {/* ... (SVG path data for address) */}
              <span>14th avenue glory road</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-neutral-400">
              {/* ... (SVG path data for email) */}
              <a href="mailto:hello@company.com">gearuoshop@gmail.com</a>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-neutral-400">
              {/* ... (SVG path data for phone) */}
              <a href="tel:11111111111">+51 11111111111</a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: 'none' }}
                name="botcheck"
              />
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="false"
                  className="w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4 border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email_address" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="false"
                  className="w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900   focus:ring-4  border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white dark:placeholder:text-neutral-200 dark:bg-neutral-900   rounded-md outline-none  h-36 focus:ring-4  border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-semibold text-white transition-colors bg-[#B31312] rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7 dark:bg-white dark:text-black "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
