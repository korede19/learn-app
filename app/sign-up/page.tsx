import SignUpForm from "@/components/signupForm";
import styles from "./styles.module.css";

const FounderComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.colOne}></div>
        <div className={styles.colTwo}>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default FounderComp;
