"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = form;

    const whatsappMessage = `Hello Deckoid,%0A
Name: ${name}%0A
Email: ${email}%0A
Subject: ${subject}%0A
Message: ${message}`;

    const whatsappURL = `https://wa.me/919426225742?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-[#190E41] text-white py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto bg-[#1f164e] rounded-xl shadow-xl p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-4 rounded-lg bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-purple-500 col-span-1"
            onChange={handleChange}
            value={form.name}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-4 rounded-lg bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-purple-500 col-span-1"
            onChange={handleChange}
            value={form.email}
          />
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="p-4 rounded-lg bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-purple-500 col-span-2"
            onChange={handleChange}
            value={form.subject}
          />
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Your Message"
            className="p-4 rounded-lg bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-purple-500 col-span-2"
            onChange={handleChange}
            value={form.message}
          ></textarea>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition px-10 py-3 rounded-full font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
