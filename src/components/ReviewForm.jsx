import React, { useReducer } from "react";
import InputText from "./ui/InputText.jsx";
import Button from "./ui/Button.jsx";
import Counter from "./Counter.jsx";
import styles from "./styles/ReviewForm.module.css";
import Textarea from "./ui/Textarea.jsx";

const DEFAULT_FORM = {
  name: "",
  text: "",
  address: "",
  grade: 0,
};

const SET_NAME = "SET_NAME";
const SET_ADDRESS = "SET_ADDRESS";
const SET_TEXT = "SET_TEXT";
const SET_GRADE = "SET_GRADE";
const CLEAR_FORM = "CLEAR_FORM";
const formReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_NAME:
      return {
        ...DEFAULT_FORM,
        name: payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: payload,
      };
    case SET_TEXT:
      return {
        ...state,
        text: payload,
      };
    case SET_GRADE:
      return {
        ...state,
        grade: payload,
      };
    case CLEAR_FORM:
      return DEFAULT_FORM;
    default:
      return state;
  }
};

function ReviewForm({ restaurantId }) {
  const [form, dispatch] = useReducer(formReducer, DEFAULT_FORM);
  const { name, text, address, grade } = form;
  const setName = (name) => dispatch({ type: SET_NAME, payload: name });
  const setText = (text) => dispatch({ type: SET_TEXT, payload: text });
  const setAddress = (address) =>
    dispatch({ type: SET_ADDRESS, payload: address });

  const setGrade = (grade) => dispatch({ type: SET_GRADE, payload: grade });
  const clearForm = () => dispatch({ type: CLEAR_FORM });
  function sendForm() {
    console.log([restaurantId, form]);
  }

  return (
    <form className={styles.reviewForm} onSubmit={(e) => e.preventDefault()}>
      <h4>Name</h4>
      <InputText text={name} setText={setName} />
      <h4>Address</h4>
      <InputText text={address} setText={setAddress} />
      <h4>Comment</h4>
      <Textarea text={text} setText={setText} />
      <Counter step={1} min={0} max={5} count={grade} setCount={setGrade} />
      <Button onclick={clearForm} text={"Clear"} />
      <Button onclick={sendForm} text={"Send"} />
    </form>
  );
}

export default ReviewForm;
