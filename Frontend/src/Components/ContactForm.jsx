import React from 'react';

const ContactForm = () => (
  <>
    <input
      type="text"
      placeholder="Name"
      className="rounded-md w-60 p-2 bg-slate-800 z-50 shadow-2xl  mt-8"
    />
    <input
      type="text"
      placeholder="Email"
      className="rounded-md w-60 p-2 bg-slate-800 z-50 shadow-2xl ml-1 mt-4"
    />
    <div className="mt-4">
      <input
        type="text"
        placeholder="Subject"
        className="rounded-md test-class p-2  bg-slate-800 z-50 shadow-2xl"
      />
    </div>
    <div className="mt-4">
      <textarea
        name="text"
        id="text"
        placeholder="Message"
        className="rounded-md  p-2 test-class bg-slate-800 z-50 shadow-2xl"
      />
    </div>
  </>
);

export default ContactForm;
