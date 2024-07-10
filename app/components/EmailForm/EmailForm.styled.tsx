import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: #fbf6f2;

  input,
  textarea,
  button {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s ease; /* Add transition for border color */
  }

  input[type='submit'] {
    background-color: #000;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  input[type='submit']:hover {
    background-color: #333;
  }

  /* Remove blue outline and set black outline on focus */
  input:focus,
  textarea:focus {
    outline: none;
    border-color: #000;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle box shadow on focus */
  }
`;
