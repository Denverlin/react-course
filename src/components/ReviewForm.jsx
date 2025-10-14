import React, { useReducer } from "react";
import InputText from "./ui/InputText.jsx";

import Button from "./ui/Button.jsx";
import Counter from "./Counter.jsx";
import "./styles/ReviewForm.css";
import Textarea from "./ui/Textarea.jsx";

const INITIAL_FORM = {
  name: "",
  text: "",
  address: "",
  grade: 0,
};
const formValidation = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_NAME":
      return {
        ...INITIAL_FORM,
        name: payload,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: payload,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: payload,
      };
    case "SET_GRADE":
      return {
        ...state,
        grade: payload,
      };
    default:
      return state;
  }
};

function ReviewForm({ restaurantId }) {
  const [form, dispatch] = useReducer(formValidation, INITIAL_FORM);
  const { name, text, address, grade } = form;
  const setName = (name) => dispatch({ type: "SET_NAME", payload: name });
  const setText = (text) => dispatch({ type: "SET_TEXT", payload: text });
  const setAddress = (address) =>
    dispatch({ type: "SET_ADDRESS", payload: address });

  const setGrade = (grade) => dispatch({ type: "SET_GRADE", payload: grade });

  function sendForm() {
    console.log([restaurantId, form]);
  }

  function clearGrade() {
    setName("");
    setText("");
    setAddress("");
    setGrade(0);
  }

  return (
    <form className={"review-form"} onSubmit={(e) => e.preventDefault()}>
      <InputText text={name} setText={setName} />
      <InputText text={address} setText={setAddress} />
      <Textarea text={text} setText={setText} />
      <Counter step={1} min={0} max={5} count={grade} setCount={setGrade} />
      <Button onclick={clearGrade} text={"Clear"} />
      <Button onclick={sendForm} text={"Отправить"} />
    </form>
  );
}

export default ReviewForm;
