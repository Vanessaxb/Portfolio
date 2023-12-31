import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.YOUR_SERVICE_ID}`, `${process.env.YOUR_TEMPLATE_ID}`, form.current, `${process.env.YOUR_PUBLIC_KEY}`)
    // emailjs
    //   .sendForm(
    //     "process.env.YOUR_SERVICE_ID",
    //     "process.env.YOUR_TEMPLATE_ID",
    //     form.current,
    //     "process.env.YOUR_PUBLIC_KEY"
    //   )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledHeader>
      <h1 className="mt-10 md:mt-40 text-gray-500 text-3xl md:text-5xl font-raleway font-black text-center">
        CONTACT:
      </h1>
      <h3 className="mt-6 md:mt-16 font-black text-green-500 text-xl md:text-3xl font-raleway text-center">
        Have a question or want to work together?
      </h3>

      <StyledContainer>
        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>
      </StyledContainer>
    </StyledHeader>
  );
};

export default ContactForm;

// Styles
const StyledHeader = styled.div`
  margin-top: 40px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: colum;
  justify-content: center;
  min-height: 100vh;
`;

const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
      

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      font-family: "Raleway", sans-serif;
      background: rgb(34 197 94);
      color: white;
      border: none;

      &:hover {
        // background: white;
        // background: rgb(107 114 128);
        color: rgb(107 114 128);
        // color: rgb(239, 68, 68);
      }
    }
    @media (max-width: 768px) {
      font-size 14px;
    }
  }
`;
