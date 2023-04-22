import React, { useState } from "react";
import styles from "./Modal.module.css";
import Input from "../Input/Input";

const Modal = ({ changeShow }) => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <>
      <div onClick={changeShow} className={styles.parent_modal_block}></div>
      <div className={styles.child_modal_block}>
        <Input
          placeholder={"Введите текст"}
          name={"Input_second"}
          setValue={setValue}
        />
      </div>
    </>
  );
};

export default Modal;
