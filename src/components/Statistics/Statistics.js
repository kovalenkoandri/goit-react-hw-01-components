import styles from './Statistics.module.css';
import StatList from './statList';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      <StatList stats={stats} />
    </ul>
  </section>
);
export default Statistics;
Statistics.propTypes = {
  title: PropTypes.string,
};
