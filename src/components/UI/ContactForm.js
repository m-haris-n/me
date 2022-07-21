import React, { useState } from "react";
import Input from "./Input";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [name, setName] = useState("");
  const setNameHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const [email, setEmail] = useState("");
  const setEmailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const [company, setCompany] = useState("");
  const setCompanyHandler = (event) => {
    event.preventDefault();
    setCompany(event.target.value);
  };
  const [phone, setPhone] = useState("");
  const setPhoneHandler = (event) => {
    event.preventDefault();
    setPhone(event.target.value);
  };
  const [message, setMessage] = useState("");
  const setMessageHandler = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const nameInput = {
    type: "text",
    name: "userName",
    id: "userName",
    value: name,
    onChange: setNameHandler,
    className: "text-input",
    placeholder: "Your Name",
  };
  const emailInput = {
    type: "text",
    name: "email",
    id: "email",
    value: email,
    onChange: setEmailHandler,
    className: "text-input",
    placeholder: "Email ID",
  };
  const companyInput = {
    type: "text",
    name: "company",
    id: "company",
    value: company,
    onChange: setCompanyHandler,
    className: "text-input",
    placeholder: "Company",
  };
  const phoneInput = {
    type: "text",
    name: "phone",
    id: "phone",
    value: phone,
    onChange: setPhoneHandler,
    className: "text-input",
    placeholder: "Phone Number",
  };

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_u0o4lhn', 'template_p5hi9fe', event.target, 'hfUiQboGpNG5aZa_i')
      .then((result) => {
          console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName('');
        setEmail('');
        setCompany('');
        setPhone('');
        setMessage('');
  }

  return (
    <form className="w-full flex flex-col items-center sm:items-start" onSubmit={sendEmail}>
      <div className="flex flex-col sm:flex-row">
        <Input inputType={nameInput} />
        <Input inputType={emailInput} />
      </div>
      <div className="flex flex-col sm:flex-row">
        <Input inputType={companyInput} />
        <Input inputType={phoneInput} />
      </div>
      <textarea
        name="message"
        id="message"
        className="text-area-input"
        placeholder="Your message..."
        value={message}
        onChange={setMessageHandler}
      ></textarea>

        <button type="submit" className="my-btn-submit">Send</button>
        
    </form>
  );
}
