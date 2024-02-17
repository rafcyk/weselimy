import { useRef, useState } from "react";
import { Heading } from "../Heading/Heading";
import { Input } from "../Input/Input";
import styles from "./styles.module.css";
import { Button } from "../Button/Button";
import emailjs from "@emailjs/browser";

//Token: e472123b3dc6f3849874e16de544dcde
//App ID: 1088061812214415
// EAADDt4Y5KmkBO9jndEuHRr1xzP0PCJEmMl1joiXZApdDaaZASzZCUQbau9kOEgllJZBwR4rbWH27OiE7fhmS9XRyaeIy4TrnFFMhn2TPKiIkbuoBaHc9h8OiK3fGneWHFOvHaKBy4TaZAxC4WttAtYkEfB2ihnNpWhpZBZBFnT5stqOXlPZBA8e2zaQPv4NmGklCJpkOMbKzAIZCN2OaLAl8ZD

export const Contact = ({ title = "", description = "" }) => {
  const formRef = useRef(null);
  const [isMessagePending, setIsMessagePending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState(new Map());
  const [formData, setFormData] = useState({
    pairNames: "",
    email: "",
    phoneNumber: "",
    eventPlace: "",
    message: "",
    eventDate: "",
  });
  const currentDate = new Date().toJSON().slice(0, 10);

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsMessagePending(true);
    setSuccessMessage("");
    setErrorMessage("");
    setErrors(new Map());

    let errorsNew = new Map();

    Object.entries(formData).forEach(([name, value]) => {
      if (name === "pairNames" && value?.trim() === "") {
        errorsNew.set(name, "To pole nie może być puste.");
      } else if (name === "email" && value?.trim() === "") {
        errorsNew.set(name, "To pole nie może być puste.");
      } else if (name === "message" && value?.trim() === "") {
        errorsNew.set(name, "To pole nie może być puste.");
      } else if (name === "eventDate") {
        const nowDate = new Date(currentDate).getTime();
        const formEventDate = new Date(value).getTime();

        if (formEventDate < nowDate) {
          errorsNew.set(name, "Nie można ustawić daty wstecz :)");
        }
      }
    });

    setErrors(errorsNew);

    if (errorsNew.size > 0) {
      setIsMessagePending(false);
      return;
    }

    emailjs
      .sendForm(
        "service_4c3yysd",
        "template_rl4xgwt",
        formRef.current,
        "6vjGT2FlM9BxKqcSh"
      )
      .then(
        () => {
          setFormData(() => ({
            pairNames: "",
            email: "",
            phoneNumber: "",
            eventPlace: "",
            message: "",
            eventDate: "",
          }));
          setIsMessagePending(false);
          setSuccessMessage(
            "Wiadomość wysłana poprawnie. Dziękujemy za kontakt, odpiszemy tak szybko jak możliwe!"
          );
        },
        (error) => {
          setIsMessagePending(false);
          setErrorMessage(
            "Przepraszamy coś poszło nie tak. Spróbuj ponownie za chwilę lub skorzystaj z numeru telefonu lub maila podanego na stronie."
          );
        }
      );
  };

  return (
    <section id="kontakt" className="section">
      <Heading className={`sectionHeading`}>{title}</Heading>
      <div
        className={`datoHtmlText`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <form
        onSubmit={handleSubmit}
        className={`${styles.contactFormWrapper}`}
        noValidate
        id="contactForm"
        ref={formRef}
      >
        <div className={`${styles.formContentWrapper}`}>
          <Input
            placeholder="Wasze imiona"
            value={formData?.pairNames}
            errorMessage={
              !!errors.get("pairNames") ? errors.get("pairNames") : ""
            }
            name="pairNames"
            handleInputChange={handleInputChange}
          />
          <Input
            placeholder="Adres email"
            value={formData?.email}
            errorMessage={!!errors.get("email") ? errors.get("email") : ""}
            name="email"
            type="email"
            handleInputChange={handleInputChange}
          />
          <Input
            placeholder="Numer telefonu"
            value={formData?.phoneNumber}
            errorMessage={
              !!errors.get("phoneNumber") ? errors.get("phoneNumber") : ""
            }
            name="phoneNumber"
            handleInputChange={handleInputChange}
          />
          <Input
            placeholder="Miejsce imprezy"
            value={formData?.eventPlace}
            errorMessage={
              !!errors.get("eventPlace") ? errors.get("eventPlace") : ""
            }
            name="eventPlace"
            handleInputChange={handleInputChange}
          />
          <Input
            placeholder="Data imprezy"
            value={formData?.eventDate}
            errorMessage={
              !!errors.get("eventDate") ? errors.get("eventDate") : ""
            }
            name="eventDate"
            type="text"
            min={currentDate}
            handleInputChange={handleInputChange}
            icon={"calendar_month"}
            onFocus={(e) => {
              e.target.type = "date";
            }}
          />
        </div>
        <div
          className={`${styles.formContentWrapper} ${styles.formContentWrapperRight}`}
        >
          <textarea
            className={`${styles.textarea} ${
              !!errors.get("message") ? styles.textareaError : ""
            }`}
            name="message"
            value={formData?.message}
            onChange={handleInputChange}
            placeholder="Treść wiadomości"
          ></textarea>
          {!!errors.get("message") ? (
            <div className={`${styles.message} ${styles.error}`}>
              {errors.get("message")}
            </div>
          ) : null}
        </div>
      </form>
      <Button
        type="submit"
        form="contactForm"
        className={`${styles.submitButton}`}
        disabled={isMessagePending}
      >
        <span>Wyślij</span>
        <span
          className={`material-symbols-rounded ${
            isMessagePending ? styles.rotateIcon : ""
          }`}
        >
          {isMessagePending ? "autorenew" : "send"}
        </span>
      </Button>
      {!!successMessage ? (
        <div className={`${styles.message} ${styles.success}`}>
          {successMessage}
        </div>
      ) : null}
      {!!errorMessage ? (
        <div className={`${styles.message} ${styles.error}`}>
          {errorMessage}
        </div>
      ) : null}
    </section>
  );
};
