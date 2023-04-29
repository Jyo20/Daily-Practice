import styles from "./ProfileCard.module.css";
function ProfileCard() {
  return (
    <div className={styles.card}>
      <img
        src="https://source.unsplash.com/600x600?boy"
        className={styles.cardImg}
        alt=""
      />
      <h3>Nil JOhn</h3>
      <p>asdfghj qwerty asdfgh asdrty xcvbn asr ertyu</p>
      <button className={styles.btn}>Follow Now</button>
    </div>
  );
}
export default ProfileCard;
