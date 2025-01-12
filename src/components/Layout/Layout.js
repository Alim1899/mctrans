import { useState } from "react";
import Background from "../Background/Background";
import Form from "../Form/Form";
import classes from "./Layout.module.css";
export default function Layout() {
  const [showForm, setShowForm] = useState(true);
  const changeForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className={classes.main}>
      <Background changeForm={changeForm} showForm={showForm} />
      <Form showForm={showForm} />
    </div>
  );
}
