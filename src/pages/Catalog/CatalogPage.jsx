import styles from "./CatalogPage.module.css";
import FilterBar from "../../components/Filters/FilterBar";
import CarCard from "../../components/CarCard/CarCard";

const CatalogPage = () => {
  // Временные мок-данные
  const cars = new Array(12).fill(null);

  return (
    <section className={styles.catalog}>
      <div className={styles.container}>
        <FilterBar />

        <ul className={styles.grid}>
          {cars.map((_, index) => (
            <li key={index}>
              <CarCard />
            </li>
          ))}
        </ul>

        <button className={styles.loadMore}>Load more</button>
      </div>
    </section>
  );
};

export default CatalogPage;
