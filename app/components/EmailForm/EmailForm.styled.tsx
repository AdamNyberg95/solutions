import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;

  textarea {
    margin-bottom: 15px;
    padding: 15px;
    font-size: 16px;
    border-radius: 10px;
    height: 100px;
    border: 1px solid grey;
    font-family: inherit;
    background-color: transparent;
  }

  input[type='submit'] {
    background-color: var(--footer-background-color);
    color: var(--text-blackdarkmode-whitelightmode);
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
    border-bottom: 1px solid grey;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 10px 2px;
    background-color: transparent;
    color: var(--text-color);
    font-size: 18px;
  }

  input::placeholder {
    color: var(--text-color-form);
    font-weight: 200;
    font-style: inherit;
    font-size: 18px;
    margin-bottom: 15px;
  }

  label {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    padding: 10px 2px;
  }

  textarea::placeholder {
    color: grey;
    font-style: inherit;
  }

  input[type='submit']:hover {
    background-color: var(--btn-hover-color);
  }

  /* Remove blue outline and set black outline on focus */
  input:focus,
  textarea:focus {
    outline: none;
    color: var(--text-color-form);
    font-size: 18px;


  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
