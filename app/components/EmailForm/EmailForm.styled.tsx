import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;

  textarea{
    margin-bottom: 15px;
    padding: 15px;
    font-size: 16px;
    border-radius: 10px;
    height: 100px;
    border: 1px solid #000;
    font-family: inherit;
  }

  input[type='submit'] {
    background-color: #000;
    color: white;
    border: white;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    font-size: 16px;
    margin-top: 10px;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'] {
    border: none;
    border-bottom: 1px solid #000; /* Add bottom border */
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 10px 2px;
 
  }

  input::placeholder{
    color: var(--text-color); /* Adjust the color as needed */
    font-style: inherit;
    font-size: 18px;
    margin-bottom: 15px;
  }

  label{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    padding: 10px 2px;
  }

  textarea::placeholder {
    color: grey; /* Adjust the color as needed */
    font-style: inherit;
  }

  input[type='submit']:hover {
    background-color: #333;
  }

  /* Remove blue outline and set black outline on focus */
  input:focus,
  textarea:focus {
    outline: none;
  }
`;
