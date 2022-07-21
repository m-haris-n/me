import React from "react";
import ContactForm from "../UI/ContactForm";
import Footer from "../UI/Footer";


export default function LastSection() {
  return (
    <div id="lastSection" className="w-full flex justify-center items-center">
      <div className="container min-h-screen flex flex-col justify-between items-center">
        <div className="w-full flex flex-col items-center sm:items-start justify-between">
            <p className="heading mt-10">Get in touch</p>
            <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
