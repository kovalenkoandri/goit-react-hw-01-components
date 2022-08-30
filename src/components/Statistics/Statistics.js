import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import data from 'components/Statistics/data';

const statList = data.map(({ id, label, percentage }) => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <li
      key={id}
      className={styles.item}
      style={{ backgroundColor: randomColor }}
    >
      <span className={styles.label}>{label}: </span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
});
export const Statistics = ({ title } ) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statList}>{statList}</ul>
  </section>
);
export default Statistics;
statList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
