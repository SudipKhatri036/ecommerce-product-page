import styles from "./Button.module.css";

function Button({ text, cbFunc }) {
  return (
    <button onClick={cbFunc} className={styles.primaryBtn}>
      {text}
    </button>
  );
}

export default Button;
