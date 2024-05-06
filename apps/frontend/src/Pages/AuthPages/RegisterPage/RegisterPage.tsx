import { ChangeEvent, useState } from "react";
import CheckBoxField from "../../../components/Auth/CheckBoxField";
import FormIntroduction from "../../../components/Auth/FormIntroduction";
import DateInputField from "../../../components/Auth/InputFields/DateInputField";
import EmailInputField from "../../../components/Auth/InputFields/EmailInputField";
import PasswordInputField from "../../../components/Auth/InputFields/PasswordInputField";
import TextInputField from "../../../components/Auth/InputFields/TextInputField";
import SubmitButton from "../../../components/Auth/SubmitButton";
import classes from "./index.module.css";
const RegisterPage = () => {
  const [registrationData, setRegistrationData] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    email: "",
    password: "",
    confirmationPassword: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegistrationData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const isoDate = await changeDateFormatToIso(registrationData.dateOfBirth);

      setRegistrationData((previousData) => ({
        ...previousData,
        dateOfBirth: isoDate,
      }));

      const response = await sendRegistrationData();

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
      const responseData = await response.json();
      console.log("User registered successfully:", responseData);
    } catch (error) {
      console.error("Error in registration process: ", error);
    }
  };

  const changeDateFormatToIso = async (date: string) => {
    // const isoDate = date + "T23:27:54.502Z";
    const isoDate = new Date(date).toISOString();
    return isoDate;
  };

  const sendRegistrationData = async () => {
    const response = await fetch("backend/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    });
    return response;
  };

  return (
    <>
      <div className={classes.registerFormWrapper}>
        <FormIntroduction
          firstText="Kreiraj svoj račun"
          secondText="Pridruži se Vitasano zajednici!"
        />
        <TextInputField
          label="Ime"
          placeholder="Unesite svoje ime"
          onChange={handleInputChange}
          name="name"
        />
        <TextInputField
          label="Prezime"
          placeholder="Unesite svoje prezime"
          onChange={handleInputChange}
          name="surname"
        />

        <DateInputField
          label="Datum rođenja"
          onChange={handleInputChange}
          name="dateOfBirth"
        />

        <EmailInputField
          label="Email adresa"
          placeholder="Unesi svoju email adresu"
          onChange={handleInputChange}
          name="email"
        />
        <PasswordInputField
          label="Lozinka"
          placeholder="Odaberi jaku lozinku"
          onChange={handleInputChange}
          name="password"
        />
        <PasswordInputField
          label="Potvrda lozinke"
          placeholder="Potvrdi svoju lozinku"
          onChange={handleInputChange}
          name="confirmationPassword"
        />
        <div className={classes.belowRegisterForm}>
          <CheckBoxField text="Slažem se s Uvjetima usluge i Politikom privatnosti." />
          <SubmitButton buttonText="Stvori račun" handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
