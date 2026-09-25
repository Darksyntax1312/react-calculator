import styles from "./inputbox.module.css";
function Inputbox({ displayValue }) {
  return (
    <>
      <div className={styles.inputBox}>
        <input type="text" className={styles.Display} value={displayValue} readOnly/>
      </div>
    </>
  );
}

export default Inputbox;
