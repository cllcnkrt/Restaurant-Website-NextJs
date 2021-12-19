import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
    <p className={styles.desc}>
      Head to this venerable pizzeria ensconced in a white frame house in the
      extreme southeast Schuylerville section of the Bronx for relatively doughy
      thin-crust pies. It’s a true neighborhood spot, around since 1959.
    </p>
    <div className={styles.wrapper}>
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
    </div>
  </div>
);

export default PizzaList;
