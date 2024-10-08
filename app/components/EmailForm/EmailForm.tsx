import React from 'react';
import emailjs from 'emailjs-com';
import { FormContainer } from './EmailForm.styled';

// Initialize EmailJS with your User ID
emailjs.init('YOUR_USER_ID');

const EmailForm: React.FC = () => {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', target).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    target.reset();
  }

  return (
    <FormContainer onSubmit={sendEmail}>
      <input type="hidden" name="to_name" value="Recipient" />
      <input type="text" name="from_name" placeholder="För- och efternamn" />
      <input type="email" name="reply_to" placeholder="E-post" />
      <label>Meddelande</label>
      <textarea name="message" placeholder="Skriv ditt meddelande.." />
      <input type="submit" value="Skicka" />
    </FormContainer>
  );
};

export default EmailForm;
