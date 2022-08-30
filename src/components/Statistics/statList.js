import data from 'components/Statistics/data';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

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
export default statList;
statList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};