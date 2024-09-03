import styles from "./Button.module.css";

function Button({ children, cbFunc, customClass }) {
  return (
    <button onClick={cbFunc} className={`${styles.primaryBtn} ${customClass}`}>
      {children}
    </button>
  );
}

export default Button;
