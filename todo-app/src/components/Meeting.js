import styles from "./Meeting.module.css";
function Meeting() {
  return (
    <div className={styles.card}>
      <img
        src="https://source.unsplash.com/1600x900?salad"
        className={styles.cardImg}
        alt=""
      />
      <h3>Important of Food</h3>

      <button className={styles.btn}>Join Meeting</button>
    </div>
  );
}
export default Meeting;
