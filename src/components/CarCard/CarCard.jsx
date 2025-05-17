import styles from "./CarCard.module.css";
import carImg from "../../assets/home-banner.jpg"; // временно, позже — src из API

const CarCard = () => {
  return (
    <div className={styles.card}>
      <img src={carImg} alt="Car preview" className={styles.image} />

      <div className={styles.top}>
        <h3 className={styles.title}>Buick Enclave, 2008</h3>
        <span className={styles.price}>$40</span>
      </div>

      <ul className={styles.info}>
        <li>Premium</li>
        <li>Automatic</li>
        <li>Petrol</li>
        <li>5 Seats</li>
        <li>1000 km</li>
      </ul>

      <button className={styles.button}>Read more</button>
    </div>
  );
};

export default CarCard;
