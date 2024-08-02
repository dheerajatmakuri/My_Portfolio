"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = {
      name: formData.name.value,
      email: formData.email.value,
      message: formData.message.value,
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    };
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formDataToSend)
    });
    const result = await response.json();
    if (result.success) {
      console.log('Form submitted successfully');
      setFormData(defaultFormState); // Reset form state
    } else {
      console.error('Form submission failed');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: {
        value: e.target.value,
        error: "",
      },
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={handleChange}
          required
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
