import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import bannerWebp from "../../assets/home-banner.webp";
import bannerJpg from "../../assets/home-banner.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <picture className={styles.bg}>
        <source srcSet={bannerWebp} type="image/webp" />
        <img
          src={bannerJpg}
          alt="Luxury rental car on the road"
          className={styles.image}
        />
      </picture>

      <div className={styles.content}>
        <h1 className={styles.title}>Find your perfect rental car</h1>
        <p className={styles.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={styles.button} onClick={() => navigate("/catalog")}>
          View Catalog
        </button>
      </div>
    </section>
  );
};

export default HomePage;
