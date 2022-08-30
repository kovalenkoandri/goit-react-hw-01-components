import styles from './Statistics.module.css';
import statList from './statList';

const Statistics = ({ title } ) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statList}>{statList}</ul>
  </section>
);
export default Statistics;

