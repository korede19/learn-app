import React from "react";
import styles from "./styles.module.css";
import LoginForm from "@/components/loginForm";

const SignupEmail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.colOne}></div>
        <div className={styles.colTwo}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default SignupEmail;
