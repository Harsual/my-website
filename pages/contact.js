import Head from "next/head";
import styles from "../styles/Contact.module.css";
import router, { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(GETFORM_FORM_ENDPOINT, formData, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          company: "",
          email: "",
          message: "",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });*/
    setFormStatus(true);
  };

  const GETFORM_FORM_ENDPOINT =
    "https://api.contactform.dev/api/send/1821129089website_form154";

  const ContactForm = (
    <form
      name="contact-form"
      method="POST"
      action="https://api.contactform.dev/api/send/1821129089website_form154"
      /*action="contact/?success=true"
      enctype="multipart/form-data"
      /*data-netlify="true"*/
      //onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name *</label>
      <input
        id="name"
        name="name"
        required
        type="text"
        value={query.name}
        onChange={handleChange()}
      />
      <label htmlFor="company">Company</label>
      <input id="company" name="company" />
      <label htmlFor="email">E-mail Address *</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="message">Message *</label>
      <textarea id="message" name="message" required></textarea>

      {formStatus ? (
        <div className="text-success mb-2">Your message has been sent.</div>
      ) : (
        ""
      )}
      <button type="submit" onSubmit={handleSubmit}>
        Submit{" "}
      </button>
    </form>
  );

  return (
    <div>
      <div className={styles.header}>
        Get in touch.<br></br>
        Let's work together.
      </div>
      <div className={styles.inquiries}>
        <div className={styles.description}>
          <text className={styles.subheader}> Inquiries:</text>
          <br></br>
          <text>
            {" "}
            Please fill out the form on the right or email me directly at
            onori273@gmail.com<br></br>
            <br></br>
            <br></br>
            (Please check Spam folders for the response.)
          </text>
        </div>
        <div className={styles.form}>
          {/*<form action="/send-data-here" method="post">
            <label for="first">First name:</label>
            <input type="text" id="first" name="first" />
            <label for="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <label for="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <label for="last">Last name:</label>
            <input type="text" id="last" name="last" />
            <button type="submit">Submit</button>
  </form>*/}
          {ContactForm}
        </div>
      </div>
    </div>
  );
}
