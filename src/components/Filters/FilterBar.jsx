import styles from "./FilterBar.module.css";

const FilterBar = () => {
  return (
    <form className={styles.form}>
      <div className={styles.group}>
        <label htmlFor="brand" className={styles.label}>
          Car brand
        </label>
        <select id="brand" name="brand" className={styles.select}>
          <option value="">Choose a brand</option>
          <option value="Volvo">Volvo</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          {/* временно вручную, позже подгрузим из API */}
        </select>
      </div>

      <div className={styles.group}>
        <label htmlFor="price" className={styles.label}>
          Price / hour
        </label>
        <select id="price" name="price" className={styles.select}>
          <option value="">Choose a price</option>
          <option value="30">$30</option>
          <option value="40">$40</option>
          <option value="50">$50</option>
        </select>
      </div>

      <div className={styles.groupInline}>
        <label className={styles.label}>Car mileage / km</label>
        <div className={styles.range}>
          <input type="number" placeholder="From" className={styles.input} />
          <input type="number" placeholder="To" className={styles.input} />
        </div>
      </div>

      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
};

export default FilterBar;
